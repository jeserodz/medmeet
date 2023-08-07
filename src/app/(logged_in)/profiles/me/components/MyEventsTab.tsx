import { EventCard } from '@/components/EventCard';

export function MyEventsTab() {
  return (
    <div
      className="tab-pane fade"
      id="sidebar-1-2"
      role="tabpanel"
      aria-labelledby="sidebar-1-2"
    >
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-3 overflow-hidden">
        <h1 className="h5 mb-0 float-left">My Events</h1>
        <a
          href="#"
          className="float-right d-sm-inline-block btn btn-sm btn-primary text-xs"
        >
          New Event
        </a>
      </div>
      {/* Content Row */}
      <div className="row">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="col-xl-4 col-md-6 mb-4">
              <EventCard
                id={1}
                title="Vancouver Fashion Week"
                location="Vancouver, Canada"
                date={new Date()}
                image=""
              />
            </div>
          ))}
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
  );
}
