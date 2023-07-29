import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { HomeSlider } from '@/components/HomeSlider';

export default function HomePage() {
  return (
    <div>
      <div className="pt-3 pb-3 bg-white shadow-sm">
        <HomeSlider />
      </div>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3 overflow-hidden">
          <h1 className="h5 mb-0 float-left">Events</h1>
          <a
            href="events.html"
            className="d-sm-inline-block text-xs float-right"
          >
            View All <i className="fas fa-eye fa-sm" />
          </a>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e1.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          07
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        Glasgow International Comedy Festival
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Glasgow, Scotland
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          10
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        Vancouver Fashion Week
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Vancouver, Canada
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e3.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          15
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        DC Environmental Film Festival
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Washington DC, USA
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e4.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          22
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        Cape Town International Jazz Festival
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Cape Town, South Africa
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          10
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        Vancouver Fashion Week
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Vancouver, Canada
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e3.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          15
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        DC Environmental Film Festival
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Washington DC, USA
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="events-detail.html">
                <div className="m-card-cover">
                  <img src="img/e4.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          22
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        Cape Town International Jazz Festival
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          Cape Town, South Africa
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
