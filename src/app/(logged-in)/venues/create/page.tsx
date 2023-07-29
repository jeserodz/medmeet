import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

export default function CreateVenuePage() {
  return (
    <div>
      <section className="py-4 bg-light  inner-header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">Create Venue</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <div className="breadcrumbs">
                <p className="mb-0">
                  <a href="#">
                    <i className="icofont-ui-home" /> Home
                  </a>{' '}
                  / <span>Blank</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-page py-5 bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bg-white p-4 shadow rounded h-100">
                    <div>
                      <div className="row gutter-1">
                        {/* TODO add: input 'Name' */}
                        {/* TODO add: select 'Google Maps Place' */}
                        {/* TODO add: button 'Save' */}
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="exampleInput8">Old Password</label>
                            <input
                              id="exampleInput8"
                              type="password"
                              className="form-control is-invalid"
                              placeholder="Password"
                            />
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
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
                            <label htmlFor="exampleInput10">
                              Retype New Password
                            </label>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
