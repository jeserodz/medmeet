export function AccountSettingsTab() {
  return (
    <div
      className="tab-pane fade"
      id="sidebar-1-4"
      role="tabpanel"
      aria-labelledby="sidebar-1-4"
    >
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-3">
        <h1 className="h5 mb-0 text-gray-900">Account Settings</h1>
      </div>
      <div className="row gutter-1">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="exampleInput8">Old Password</label>
            <input
              id="exampleInput8"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput9">New Password</label>
            <input
              id="exampleInput9"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput10">Retype New Password</label>
            <input
              id="exampleInput10"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="#!" className="btn btn-primary">
            Save Changes
          </a>
        </div>
      </div>
    </div>
  );
}
