import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

export default function CreateEventPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="py-4 bg-light  inner-header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">Create Event</h4>
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
                        {/* TODO add: input 'Title' */}
                        {/* TODO add: textarea 'Description' */}
                        {/* TODO add: timepicker 'Date/Time' */}
                        {/* TODO add: select 'Venue' */}
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
      {/* Footer */}
      <div className="pt-5 pb-4 bg-white footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>BEST LANGUAGE GENRE MOVIES</h6>
              <ul>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">English Animated Movies</a>
                </li>
                <li>
                  <a href="#">English Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">English Comedy Movies</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>MOVIES BY GENRE</h6>
              <ul>
                <li>
                  <a href="#">Best Animated Movies</a>
                </li>
                <li>
                  <a href="#">Best Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">Best Comedy Movies</a>
                </li>
                <li>
                  <a href="#">Best Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>POPULAR MOVIES</h6>
              <ul>
                <li>
                  <a href="#">English Comedy Movies</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">English Animated Movies</a>
                </li>
                <li>
                  <a href="#">English Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>ABOUT Movbok</h6>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Press Coverage</a>
                </li>
                <li>
                  <a href="#">Current Openings</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Press Release</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <div className="container">
          <p className="m-0 text-center">
            Copyright © <strong>Movbok</strong> 2020 | Made with{' '}
            <i className="fas fa-heart fa-fw text-danger" /> by{' '}
            <a
              className="text-danger"
              target="_blank"
              href="https://www.instagram.com/iamgurdeeposahan/"
            >
              askbootstrap
            </a>
          </p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}
