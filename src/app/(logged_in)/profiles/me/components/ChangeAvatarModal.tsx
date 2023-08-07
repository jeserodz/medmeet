import { ChangeEvent, useEffect, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { useUser } from '../../../../../providers/UserProvider';
import { User } from '../../../../../db';

export function ChangeAvatarModal() {
  const { setUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>();
  const [imageUrl, setImageUrl] = useState<string | null>();
  const [croppedArea, setCroppedArea] = useState<Area | null>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  async function onFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    const url = await readFile(e.target.files![0]);
    setImageUrl(url);
    setSelectedImage(file);
  }

  async function onSave() {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('croppedArea', JSON.stringify(croppedArea));

    const response = await fetch('/profiles/me/api/change-avatar', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user as User);
      setIsOpen(false);
      $('#changeAvatarClose').click();
    }
  }

  // clear state on close
  useEffect(() => {
    if (isOpen) return;

    // wait for animation to end
    setTimeout(() => {
      if (selectedImage) setSelectedImage(null);
      if (imageUrl) setImageUrl(null);
      if (croppedArea) setCroppedArea(null);
    }, 1000);
  }, [isOpen, selectedImage, imageUrl, croppedArea]);

  return (
    <div className="text-dark">
      <button
        type="button"
        className="btn btn-dark"
        id="#changeAvatarIcon"
        data-toggle="modal"
        data-target="#changeAvatarModal"
        style={{ position: 'absolute', bottom: 0, right: '-1em' }}
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-pencil-alt"></i>
      </button>
      <div
        className="modal fade"
        id="changeAvatarModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* header */}
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Change Avatar
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* body */}
            <div className="modal-body text-left" key={`open-${isOpen}`}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">
                      Choose an image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      onChange={onFileSelect}
                    />
                  </div>
                </div>
                {imageUrl && (
                  <div className="col-12">
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: 1,
                      }}
                    >
                      <Cropper
                        image={imageUrl}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onCropComplete={(_, value) => setCroppedArea(value)}
                        onZoomChange={setZoom}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                id="changeAvatarClose"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSave}
                disabled={!selectedImage || !croppedArea}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => resolve(reader.result as string),
      false
    );
    reader.readAsDataURL(file);
  });
}
