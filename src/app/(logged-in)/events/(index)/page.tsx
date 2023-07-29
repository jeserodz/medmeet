import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

export default function CreateEventPage() {
  return (
    <div className="container">
      {/* Page Heading */}
      <div className="row">
        <div className="col-12 d-sm-flex align-items-center justify-content-between mt-5 mb-3">
          <h1 className="h5 mb-0 float-left">Events</h1>
          <a
            href="#"
            className="float-right d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            Reset Filters <i className="fas fa-times fa-sm text-white-50" />
          </a>
        </div>
      </div>
      {/* Content Row */}
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="filters mobile-filters shadow rounded bg-white mb-4 d-none d-block d-md-none">
            <div className="border-bottom">
              <a
                className="h6 font-weight-bold text-dark d-block m-0 p-3"
                data-toggle="collapse"
                href="#mobile-filters"
                role="button"
                aria-expanded="false"
                aria-controls="mobile-filters"
              >
                Filter By <i className="fas fa-angle-down float-right mt-1" />
              </a>
            </div>
            <div
              id="mobile-filters"
              className="filters-body collapse multi-collapse"
            >
              <div id="accordion">
                <div className="filters-card border-bottom p-3">
                  <div className="filters-card-header" id="headingOffer">
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseSort"
                        aria-expanded="true"
                        aria-controls="collapseSort"
                      >
                        Sort by Products{' '}
                        <i className="fas fa-angle-down float-right" />
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseSort"
                    className="collapse"
                    aria-labelledby="headingOffer"
                    data-parent="#accordion"
                  >
                    <div className="filters-card-body card-shop-filters">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan111"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan111"
                        >
                          Relevance{' '}
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan112"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan112"
                        >
                          Price (Low to High)
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan113"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan113"
                        >
                          Price (High to Low)
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan114"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan114"
                        >
                          Discount (High to Low)
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan115"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan115"
                        >
                          Name (A to Z)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filters-card border-bottom p-3">
                  <div className="filters-card-header" id="headingTwo">
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapsetwo"
                        aria-expanded="true"
                        aria-controls="collapsetwo"
                      >
                        Genre
                        <i className="fas fa-angle-down float-right" />
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapsetwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="filters-card-body card-shop-filters">
                      <form className="filters-search mb-3">
                        <div className="form-group">
                          <i className="fas fa-search" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Start typing to search..."
                          />
                        </div>
                      </form>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan116"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan116"
                        >
                          Action <small className="text-black-50">156</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan117"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan117"
                        >
                          Adventure <small className="text-black-50">120</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan118"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan118"
                        >
                          Animation <small className="text-black-50">130</small>
                        </label>
                      </div>
                      <div className="mt-2">
                        <a href="#" className="link">
                          See all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filters-card border-bottom p-3">
                  <div className="filters-card-header" id="headingOne">
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Select Language{' '}
                        <i className="fas fa-angle-down float-right" />
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="filters-card-body card-shop-filters">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan1155"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan1155"
                        >
                          Punjabi <small className="text-black-50">230</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan1166"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan1166"
                        >
                          English <small className="text-black-50">95</small>
                        </label>
                      </div>
                      <div className="mt-2">
                        <a href="#" className="link">
                          See all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filters-card border-bottom p-3">
                  <div className="filters-card-header" id="headingOffer">
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOffer"
                        aria-expanded="true"
                        aria-controls="collapseOffer"
                      >
                        Format <i className="fas fa-angle-down float-right" />
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseOffer"
                    className="collapse"
                    aria-labelledby="headingOffer"
                    data-parent="#accordion"
                  >
                    <div className="filters-card-body card-shop-filters">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan1100"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan1100"
                        >
                          {' '}
                          2D{' '}
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan11111"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan11111"
                        >
                          {' '}
                          3D
                        </label>
                      </div>
                      <div className="mt-2">
                        <a href="#" className="link">
                          See all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filters shadow rounded bg-white mb-3 d-none d-sm-none d-md-block">
            <div className="filters-header border-bottom p-3">
              <h6 className="m-0 text-dark">Filter By</h6>
            </div>
            <div className="filters-body">
              <div id="accordion">
                <div className="filters-card border-bottom p-3">
                  <div className="filters-card-header" id="headingOne">
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Categories{' '}
                        <i className="fas fa-angle-down float-right" />
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="filters-card-body card-shop-filters">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan11z"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan11z"
                        >
                          {' '}
                          Punjabi <small className="text-black-50">230</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan11zz"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan11zz"
                        >
                          {' '}
                          English <small className="text-black-50">95</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan11zzz"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan11zzz"
                        >
                          {' '}
                          Hindi <small className="text-black-50">35</small>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="osahan11x"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="osahan11x"
                        >
                          Telugu <small className="text-black-50">46</small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-sm-none d-lg-block">
            <img
              className="img-fluid rounded mt-3"
              src="https://via.placeholder.com/255x623"
              title="#"
            />
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="row list-bp">
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Glasgow, Scotland
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Vancouver, Canada
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Washington DC, USA
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Cape Town, South Africa
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Glasgow, Scotland
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Vancouver, Canada
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Washington DC, USA
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Cape Town, South Africa
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                            <i className="fas fa-map-marker-alt fa-sm ml-1" />{' '}
                            Glasgow, Scotland
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 mb-5 col-12">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
