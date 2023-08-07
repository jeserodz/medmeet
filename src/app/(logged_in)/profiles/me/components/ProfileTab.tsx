'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import { useUser } from '@/providers/UserProvider';

export function ProfileTab() {
  const { user } = useUser();

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
    },
    onSubmit: console.log,
  });

  return (
    <div
      className="tab-pane fade show active"
      id="sidebar-1-1"
      role="tabpanel"
      aria-labelledby="sidebar-1-1"
    >
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-3">
        <h1 className="h5 mb-0 text-gray-900">Profile</h1>
      </div>
      <div className="row gutter-1">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput1">First Name</label>
            <input
              id="exampleInput1"
              type="text"
              className="form-control"
              placeholder="First name"
              value={formik.values.first_name || ''}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput2">Last Name</label>
            <input
              id="exampleInput2"
              type="text"
              className="form-control"
              placeholder="Last name"
              value={formik.values.last_name || ''}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput7">Email</label>
            <input
              id="exampleInput7"
              type="text"
              className="form-control"
              placeholder="Email"
              value={formik.values.email || ''}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput6">Telephone</label>
            <input
              id="exampleInput6"
              type="text"
              className="form-control"
              placeholder="Telephone"
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
