interface ConfirmModalProps {
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function ConfirmModal({
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#confirmModal"
        >
          {title}
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="confirmModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="confirmModalTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onCancel}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{message}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={onCancel}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={onConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
