'use client';

import { useFormik } from 'formik';
import { useUser } from '@/providers/UserProvider';
import classNames from 'classnames';
import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { PHONE_REGEX, validationSchemas } from '@/util/constants';

export function ProfileTab() {
  const { user, setUser } = useUser();
  const [successVisible, setSuccessVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
    },
    enableReinitialize: true,
    validationSchema: validationSchemas.myProfileForm,
    onSubmit: async () => {
      const response = await fetch('/api/users/update-profile', {
        method: 'PATCH',
        body: JSON.stringify(formik.values),
      });

      if (response.ok) {
        setUser(await response.json());
        setSuccessVisible(true);
        formik.setSubmitting(false);
        formik.resetForm();

        setTimeout(() => {
          setSuccessVisible(false);
        }, 3000);
      }
    },
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
              type="text"
              className={classNames('form-control', {
                'is-invalid': formik.submitCount && formik.errors.first_name,
              })}
              placeholder="First name"
              name="first_name"
              value={formik.values.first_name || ''}
              onChange={formik.handleChange}
            />
            <div className="invalid-feedback">{formik.errors.first_name}</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput2">Last Name</label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': formik.submitCount && formik.errors.last_name,
              })}
              placeholder="Last name"
              name="last_name"
              value={formik.values.last_name || ''}
              onChange={formik.handleChange}
            />
            <div className="invalid-feedback">{formik.errors.last_name}</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput7">Email</label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': formik.submitCount && formik.errors.email,
              })}
              placeholder="Email"
              name="email"
              value={formik.values.email || ''}
              onChange={formik.handleChange}
            />
            <div className="invalid-feedback">{formik.errors.email}</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInput6">Telephone</label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': formik.submitCount && formik.errors.phone,
              })}
              placeholder="Telephone"
              name="phone"
              value={formik.values.phone || ''}
              onChange={formik.handleChange}
            />
            <div className="invalid-feedback">{formik.errors.phone}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <button
            disabled={formik.isSubmitting}
            onClick={formik.submitForm}
            className={classNames('btn btn-primary', {
              disabled: formik.submitCount && !formik.isValid,
            })}
          >
            Save Changes
          </button>
        </div>
        {formik.isSubmitting && (
          <div className="col pl-0 d-flex align-items-center">
            <Loader size={16} width={2} />
          </div>
        )}
      </div>
      {successVisible && (
        <div className="row">
          <div className="col pt-3">
            <div className="alert alert-success" role="alert">
              Changes saved successfully.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
