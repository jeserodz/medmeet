export default function EventDetailsPage() {
  return (
    <div>
      <div className="cover-pic">
        <img src="/img/cover.jpg" className="img-fluid" alt="..." />
      </div>
      <div className="container mb-4 pb-2 list-bp">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="bg-white info-header eheader shadow rounded mb-4">
              <div className="d-flex align-items-center justify-content-between py-3 px-4 border-bottom">
                <div>
                  <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                    Vancouver Fashion Week
                  </h3>
                  <p className="mb-0">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-fw fa-sm mr-1" />{' '}
                      Vancouver, Canada
                    </small>
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="d-sm-inline-block btn btn-primary shadow-sm"
                  >
                    <i className="fas fa-share-alt" />
                  </a>
                  <a
                    href="#"
                    className="d-sm-inline-block btn btn-danger shadow-sm"
                  >
                    {' '}
                    Add to Watchlist <i className="fas fa-plus fa-sm  ml-1" />
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 px-4">
                <div>
                  <p className="mb-0 text-gray-900">
                    <i className="fas fa-calendar-alt fa-sm fa-fw mr-1" /> Sun
                    15 Dec at 4:00 PM
                  </p>
                </div>
                <div>
                  <p className="mb-0 text-gray-600">
                    <i className="fas fa-film fa-sm fa-fw mr-1" /> Classical,
                    Rock, Sufi | English, Hindi | 12+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Artist
              </h1>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s1.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Carla Gugino</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s2.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Sylvester Stallone</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s3.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Rose Byrne</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s1.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Carla Gugino</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s2.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Sylvester Stallone</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list mb-3">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s3.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Rose Byrne</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
              <div className="artist-list">
                <a className="d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="/img/s4.png" />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Jason Statham</div>
                    <div className="small text-gray-600">Acting</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Summary
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Date And Time
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h6 className="mt-0 mb-3">New Year Eve on the Waterfront</h6>
                  <p>
                    Boston Harbor Now in partnership with the Friends of
                    Christopher Columbus Park, the Wharf District Council and
                    the City of Boston is proud to announce the New Year Eve
                    Midnight Harbor Fireworks! This beloved nearly 40-year old
                    tradition is made possible by the generous support of local
                    waterfront organizations and businesses and the support of
                    the City of Boston and the Office of Mayor Marty Walsh.
                  </p>
                  <p>
                    Join us as we ring in the New Year with a dazzling display
                    over Boston Harbor. Public viewing is free and available
                    from the Harborwalk of these suggested viewing locations:
                  </p>
                  <ul>
                    <li>Christopher Columbus Park, North End</li>
                    <li>Fan Pier, Seaport District</li>
                    <li>East Boston Harborwalk</li>
                  </ul>
                  <p className="mb-2">
                    The show will begin promptly at midnight.
                  </p>
                  <p className="mb-0">
                    Register here for a reminder and updates about the harbor
                    fireworks and other waterfront public programs as they
                    become available. Be the first to be notified for popular
                    waterfront New Year Eve public activities.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h5 className="mt-0 mb-3">Mon, Dec 31, 2018, 11:59 PM –</h5>
                  <p>
                    Boston Harbor Now in partnership with the Friends of
                    Christopher Columbus Park, the Wharf District Council and
                    the City of Boston is proud to announce the New Year Eve
                    Midnight Harbor Fireworks! This beloved nearly 40-year old
                    tradition is made possible by the generous support of local
                    waterfront organizations and businesses and the support of
                    the City of Boston and the Office of Mayor Marty Walsh.
                  </p>
                  <h5 className="mt-0 mb-3">Tue, Jan 1, 2019, 12:19 AM EST</h5>
                  <p>
                    Boston Harbor Now in partnership with the Friends of
                    Christopher Columbus Park, the Wharf District Council and
                    the City of Boston is proud to announce the New Year Eve
                    Midnight Harbor Fireworks! This beloved nearly 40-year old
                    tradition is made possible by the generous support of local
                    waterfront organizations and businesses and the support of
                    the City of Boston and the Office of Mayor Marty Walsh.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Collapsible Group Item #1
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Collapsible Group Item #2
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Location
              </h1>
              <p>
                <b>Boston Harborwalk</b>
                <br />
                Christopher Columbus Park
                <br />
                Boston, MA 02109
                <br />
                United States
              </p>
              <p className="text-gray-600">
                <i className="fas fa-mobile fa-fw" /> +00 12354 89564
              </p>
              <p className="mb-0 text-gray-600">
                <i className="fas fa-envelope-open fa-fw" /> iamosahan@gmail.com
              </p>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Map
              </h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.1723543713!2d73.1567129962395!3d31.003573085499188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1570105072228!5m2!1sen!2sin"
                width="100%"
                height={185}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
