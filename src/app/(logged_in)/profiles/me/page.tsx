export default function MyProfilePage() {
  return (
    <div>
      <section className="py-4 bg-light inner-header border-bottom">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">My Account</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <div className="breadcrumbs">
                <p className="mb-0">
                  <a href="#">
                    <i className="icofont-ui-home" /> Home
                  </a>{' '}
                  / <span>My Account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-5 mb-4 pb-2 list-bp">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="bg-gradient-primary inner-profile text-white py-5 px-4 widget shadow rounded mb-4 text-center">
              <img className="img-profile rounded-circle" src="/img/s4.png" />
              <h5 className="mb-1 mt-3">Gurdeep Osahan</h5>
              <p>
                <span className="text-muted text-gray-500">
                  <i className="fas fa-map-marker-alt fa-fw fa-sm mr-1" />{' '}
                  India, Punjab
                </span>
              </p>
              <a
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                className="btn btn btn-warning"
              >
                Sign out
              </a>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <div
                className="nav nav-pills flex-column lavalamp"
                id="sidebar-1"
                role="tablist"
              >
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#sidebar-1-1"
                  role="tab"
                  aria-controls="sidebar-1"
                  aria-selected="true"
                >
                  <i className="fas fa-user-circle fa-sm fa-fw mr-2 ri" />{' '}
                  Profile
                </a>
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#sidebar-1-2"
                  role="tab"
                  aria-controls="sidebar-1-2"
                  aria-selected="false"
                >
                  <i className="fas fa-heart fa-sm fa-fw mr-2 ri" /> Watchlist
                </a>
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#sidebar-1-3"
                  role="tab"
                  aria-controls="sidebar-1-3"
                  aria-selected="false"
                >
                  <i className="fas fa-list-alt fa-sm fa-fw mr-2 ri" /> Your
                  Lists
                </a>
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#sidebar-1-4"
                  role="tab"
                  aria-controls="sidebar-1-4"
                  aria-selected="false"
                >
                  <i className="fas fa-cog fa-sm fa-fw mr-2 ri" /> Account
                  Settings
                </a>
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 ri" />{' '}
                  Logout
                </a>
              </div>
            </div>
            <div className="d-none d-sm-none d-lg-block">
              <img
                className="img-fluid rounded"
                src="https://via.placeholder.com/255x380"
                title="#"
              />
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <div className="tab-content" id="myTabContent">
                {/* profile */}
                <div
                  className="tab-pane fade"
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
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInput3">Company</label>
                        <input
                          id="exampleInput3"
                          type="text"
                          className="form-control"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="exampleInput4">Street</label>
                        <input
                          id="exampleInput4"
                          type="text"
                          className="form-control"
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="exampleInput5">Zip</label>
                        <input
                          id="exampleInput5"
                          type="text"
                          className="form-control"
                          placeholder="Zip"
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInput7">Email</label>
                        <input
                          id="exampleInput7"
                          type="text"
                          className="form-control"
                          placeholder="Email"
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
                {/* orders */}
                <div
                  className="tab-pane fade show active"
                  id="sidebar-1-2"
                  role="tabpanel"
                  aria-labelledby="sidebar-1-2"
                >
                  {/* Page Heading */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-3 overflow-hidden">
                    <h1 className="h5 mb-0 float-left">Watchlist</h1>
                    <a
                      href="movies.html"
                      className="float-right d-sm-inline-block text-xs"
                    >
                      Showing 97 of 97 items
                    </a>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 88%
                              </h6>
                              <small className="text-muted">23,421</small>
                            </div>
                            <img
                              src="/img/m1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Jumanji: The Next Level
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 50%
                              </h6>
                              <small className="text-muted">8,784</small>
                            </div>
                            <img
                              src="/img/m2.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Gemini Man
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 74%
                              </h6>
                              <small className="text-muted">88,865</small>
                            </div>
                            <img
                              src="/img/m4.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Charlies Angels
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 50%
                              </h6>
                              <small className="text-muted">8,784</small>
                            </div>
                            <img
                              src="/img/m2.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Gemini Man
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 74%
                              </h6>
                              <small className="text-muted">88,865</small>
                            </div>
                            <img
                              src="/img/m4.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Charlies Angels
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 88%
                              </h6>
                              <small className="text-muted">23,421</small>
                            </div>
                            <img
                              src="/img/m1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Jumanji: The Next Level
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 74%
                              </h6>
                              <small className="text-muted">88,865</small>
                            </div>
                            <img
                              src="/img/m4.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Charlies Angels
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 50%
                              </h6>
                              <small className="text-muted">8,784</small>
                            </div>
                            <img
                              src="/img/m2.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Gemini Man
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <button className="btn btn-danger btn-block btn-sm">
                                <i className="fas fa-trash" /> Remove
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0 pb-0">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* addresses */}
                <div
                  className="tab-pane fade"
                  id="sidebar-1-3"
                  role="tabpanel"
                  aria-labelledby="sidebar-1-3"
                >
                  {/* Page Heading */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-3 overflow-hidden">
                    <h1 className="h5 mb-0 float-left">Your Lists</h1>
                    <a
                      href="#"
                      className="float-right d-sm-inline-block btn btn-sm btn-primary text-xs"
                    >
                      New List
                    </a>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 88%
                              </h6>
                              <small className="text-muted">23,421</small>
                            </div>
                            <img
                              src="/img/m1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Jumanji: The Next Level
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 50%
                              </h6>
                              <small className="text-muted">8,784</small>
                            </div>
                            <img
                              src="/img/m2.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Gemini Man
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 74%
                              </h6>
                              <small className="text-muted">88,865</small>
                            </div>
                            <img
                              src="/img/m4.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Charlies Angels
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 50%
                              </h6>
                              <small className="text-muted">8,784</small>
                            </div>
                            <img
                              src="/img/m2.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Gemini Man
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 20%
                              </h6>
                              <small className="text-muted">69,123</small>
                            </div>
                            <img
                              src="/img/m3.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              The Current War
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 74%
                              </h6>
                              <small className="text-muted">88,865</small>
                            </div>
                            <img
                              src="/img/m4.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Charlies Angels
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div className="m-card-cover">
                            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 className="text-gray-900 mb-0 font-weight-bold">
                                <i className="fas fa-heart text-danger" /> 88%
                              </h6>
                              <small className="text-muted">23,421</small>
                            </div>
                            <img
                              src="/img/m1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body p-3">
                            <h5 className="card-title text-white mb-1">
                              Jumanji: The Next Level
                            </h5>
                            <p className="card-text">
                              <small className="text-white">English</small>{' '}
                              <small className="text-danger ml-2">
                                <i className="fas fa-calendar-alt fa-sm" /> 22
                                AUG
                              </small>{' '}
                            </p>
                            <div className="mt-3">
                              <div className="row">
                                <div className="col pr-1">
                                  <button className="btn btn-danger btn-block btn-sm">
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                                <div className="col pl-1">
                                  <button className="btn btn-info btn-block btn-sm">
                                    <i className="fas fa-edit" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0 pb-0">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* payments */}
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
              {/* / content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
