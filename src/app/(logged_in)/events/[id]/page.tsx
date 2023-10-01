import Image from 'next/image';
import { EventService } from '../../../../services/event.service';
import { EventMap } from '../components/EventMap';
import { EventEditModal } from '../components/EventEditModal';
import { VenueService } from '../../../../services/venue.service';

interface EventDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function EventDetailsPage(props: EventDetailsPageProps) {
  const event = await EventService.get(props.params.id);
  const venues = await VenueService.getAll();

  return (
    <div>
      <div className="cover-pic">
        <Image
          src="/img/cover.jpg"
          width={1300}
          height={508}
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="container mb-4 pb-2 list-bp">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="bg-white info-header eheader shadow rounded mb-4">
              <div className="d-flex align-items-center justify-content-between py-3 px-4 border-bottom">
                <div>
                  <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                    {event?.title}
                  </h3>
                  <p className="mb-0">
                    <small className="text-muted">
                      <i className="fas fa-map-marker-alt fa-fw fa-sm mr-1" />{' '}
                      {event?.venue?.name}
                    </small>
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="d-sm-inline-block btn btn-primary shadow-sm mr-2"
                  >
                    <i className="fas fa-share-alt" />
                  </a>
                  <a
                    href="#"
                    className="d-sm-inline-block btn btn-danger shadow-sm"
                  >
                    {' '}
                    Register <i className="fas fa-plus fa-sm  ml-1" />
                  </a>
                  <EventEditModal event={event!} venues={venues} />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 px-4">
                <div>
                  <p className="mb-0 text-gray-900">
                    <i className="fas fa-calendar-alt fa-sm fa-fw mr-1" />
                    {event?.datetime &&
                      new Date(event?.datetime).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="mb-0 text-gray-600">
                    <i className="fas fa-film fa-sm fa-fw mr-1" /> [CATEGORIES]
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
                Speakers
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
                  {event?.description}
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
                <b>{event?.venue?.name}</b>
                <br />
                {event?.venue?.data?.formatted_address}
              </p>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Map
              </h1>
              {event?.venue && <EventMap venue={event?.venue} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
