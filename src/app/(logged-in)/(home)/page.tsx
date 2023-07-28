import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { HomeSlider } from '@/components/HomeSlider';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="pt-3 pb-3 bg-white shadow-sm">
        <HomeSlider />
      </div>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mt-5 mb-3">
          <h1 className="h5 mb-0 float-left">Offers</h1>
          <a
            href="offers.html"
            className="d-sm-inline-block text-xs float-right"
          >
            View All <i className="fas fa-eye fa-sm" />
          </a>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-4 mb-4">
            <div className="card offer-card shadow border-0">
              <a href="#">
                <div className="m-card-cover">
                  <img src="img/o1.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <img src="img/l1.png" className="rounded-circle" alt="..." />
                  <p className="card-text text-gray-900 mt-3 mb-1">
                    SBI Signature/Elite Credit Card Offer{' '}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-sm mr-1" /> Valid
                      till{' '}
                      <span className="text-gray-700">15 Oct 2019 23:59</span>
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 mb-4">
            <div className="card offer-card shadow border-0">
              <a href="#">
                <div className="m-card-cover">
                  <img src="img/o2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <img src="img/l2.png" className="rounded-circle" alt="..." />
                  <p className="card-text text-gray-900 mt-3 mb-1">
                    Google Pay New User Offer{' '}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-sm mr-1" /> Valid
                      till{' '}
                      <span className="text-gray-700">15 Oct 2019 23:59</span>
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 mb-4">
            <div className="card offer-card shadow border-0">
              <a href="#">
                <div className="m-card-cover">
                  <img src="img/o3.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <img src="img/l3.png" className="rounded-circle" alt="..." />
                  <p className="card-text text-gray-900 mt-3 mb-1">
                    HDFC Bank Times Card Offer
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-sm mr-1" /> Valid
                      till{' '}
                      <span className="text-gray-700">15 Oct 2019 23:59</span>
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 mb-4">
            <div className="card offer-card shadow border-0">
              <a href="#">
                <div className="m-card-cover">
                  <img src="img/o4.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <img src="img/l4.png" className="rounded-circle" alt="..." />
                  <p className="card-text text-gray-900 mt-3 mb-1">
                    Visa Blockbuster Weekends Offer{' '}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-sm mr-1" /> Valid
                      till{' '}
                      <span className="text-gray-700">15 Oct 2019 23:59</span>
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3 overflow-hidden">
          <h1 className="h5 mb-0 float-left">Movies</h1>
          <a
            href="movies.html"
            className="d-sm-inline-block text-xs float-right"
          >
            View All <i className="fas fa-eye fa-sm" />
          </a>
        </div>
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
                  <img src="img/m1.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-white mb-1">
                    Jumanji: The Next Level
                  </h5>
                  <p className="card-text">
                    <small className="text-white">English</small>{' '}
                    <small className="text-danger ml-2">
                      <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                    </small>{' '}
                  </p>
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
                  <img src="img/m2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-white mb-1">Gemini Man</h5>
                  <p className="card-text">
                    <small className="text-white">English</small>{' '}
                    <small className="text-danger ml-2">
                      <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                    </small>{' '}
                  </p>
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
                  <img src="img/m3.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-white mb-1">
                    The Current War
                  </h5>
                  <p className="card-text">
                    <small className="text-white">English</small>{' '}
                    <small className="text-danger ml-2">
                      <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                    </small>{' '}
                  </p>
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
                  <img src="img/m4.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-white mb-1">
                    Charlies Angels
                  </h5>
                  <p className="card-text">
                    <small className="text-white">English</small>{' '}
                    <small className="text-danger ml-2">
                      <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                    </small>{' '}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3">
          <h1 className="h5 mb-0">Collections</h1>
        </div>
        <div className="row">
          <div className="col-xl-12 col-md-12 mb-4">
            <div className="collections-slider">
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c1.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c2.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c3.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c4.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c5.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c2.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
              <div className="card c-card shadow border-0 overflow-hidden">
                <a href="#">
                  <img src="img/c3.jpg" className="img-fluid" alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
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
        </div>
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3 overflow-hidden">
          <h1 className="h5 mb-0 float-left">Sports</h1>
          <a
            href="sports.html"
            className="d-sm-inline-block text-xs float-right"
          >
            View All <i className="fas fa-eye fa-sm" />
          </a>
        </div>
        <div className="row pb-4 mb-2">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card e-card shadow border-0">
              <a href="sports-detail.html">
                <div className="m-card-cover">
                  <img src="img/s1.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          25
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        The FIFA World Cup
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
              <a href="sports-detail.html">
                <div className="m-card-cover">
                  <img src="img/s2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          28
                        </h6>
                        <small className="text-muted">OCT</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        The Olympic Games
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          United States
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
              <a href="sports-detail.html">
                <div className="m-card-cover">
                  <img src="img/s3.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          12
                        </h6>
                        <small className="text-muted">NOV</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        The 24 Hours of Le Mans
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          France
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
              <a href="sports-detail.html">
                <div className="m-card-cover">
                  <img src="img/s4.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters align-items-center">
                    <div className="col-2 auto py-3 pl-3">
                      <div className="bg-white rounded text-center">
                        <h6 className="text-danger mb-0 font-weight-bold">
                          21
                        </h6>
                        <small className="text-muted">NOV</small>
                      </div>
                    </div>
                    <div className="col-10 p-3">
                      <p className="card-text text-gray-900 mb-1">
                        The Super Bowl
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
                          United States
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
      </footer>
    </div>
  );
}
