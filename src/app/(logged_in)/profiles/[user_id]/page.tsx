export default function ProfileDetailsPage() {
  return (
    <div className="container pt-5 pb-4">
      <div className="row list-bp">
        <div className="col-md-4 col-lg-3">
          <div className="bg-white p-3 widget shadow rounded mb-4">
            <img src="/img/p5.jpg" className="img-fluid rounded" alt="..." />
            <h1 className="h6 mb-3 mt-4 font-weight-bold text-gray-900">
              Personal Info
            </h1>
            <p className="mb-2">
              <i className="fas fa-baseball-ball fa-fw" /> Acting
            </p>
            <p className="mb-2">
              <i className="fas fa-user-circle fa-fw" /> Known For - Acting
            </p>
            <p className="mb-2">
              <i className="fas fa-venus-mars fa-fw" /> Gender - Male
            </p>
            <p className="mb-2">
              <i className="fas fa-list-alt fa-fw" /> Known Credits - 227
            </p>
            <p className="mb-2">
              <i className="fas fa-calendar-alt fa-fw" /> Date of Birth -
              1972-05-02
            </p>
            <p className="mb-2 pb-1">
              <i className="fas fa-map-marker-alt fa-fw" /> Hayward, California,
              USA
            </p>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <div className="bg-white info-header shadow rounded mb-4">
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
              <div>
                <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                  Dwayne Johnson
                </h3>
                <p className="mb-0 text-gray-800">
                  <small className="text-muted">
                    <i className="fas fa-user-circle fa-fw fa-sm mr-1" /> Acting
                  </small>
                </p>
              </div>
              <div className="d-flex">
                <a href="#" className="btn btn-primary btn-circle">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="btn btn-danger btn-circle">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#" className="btn btn-warning btn-circle">
                  <i className="fab fa-snapchat-ghost" />
                </a>
                <a href="#" className="btn btn-info btn-circle">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
            <div className="p-3 mb-4">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Biography
              </h1>
              <div>
                <p className="mb-0 text-gray-600">
                  An American and Canadian actor, producer and semi-retired
                  professional wrestler, signed with WWE. Johnson is half-Black
                  and half-Samoan. His father, Rocky Johnson, is a Black
                  Canadian, from Nova Scotia, and part of the first Black tag
                  team champions in WWE history back when it was known as the
                  WWF along with Tony Atlas. His mother is Samoan and the
                  daughter of Peter Maivia, who was also a pro wrestler. Maivias
                  wife, Lia Maivia, was one of wrestlings few female promoters,
                  taking over Polynesian Pacific Pro Wrestling after her
                  husbands death in 1982, until 1988. Through his mother, he is
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 widget shadow rounded mb-4">
            <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
              Biography
            </h1>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card m-card shadow border-0">
                  <a href="movies-detail.html">
                    <div className="m-card-cover">
                      <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                        <h6 className="text-gray-900 mb-0 font-weight-bold">
                          <i className="fas fa-thumbs-up text-success" /> 88%
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
                          <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                        </small>{' '}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
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
              <div className="col-xl-3 col-md-6">
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
                          <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                        </small>{' '}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
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
                          <i className="fas fa-calendar-alt fa-sm" /> 22 AUG
                        </small>{' '}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
