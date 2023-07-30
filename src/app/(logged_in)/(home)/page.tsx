import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { HomeSlider } from '@/components/HomeSlider';
import { EventCard } from '../../../components/EventCard';

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
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-xl-3 col-md-6 mb-4">
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
      </div>
    </div>
  );
}
