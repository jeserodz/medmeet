import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { VenueService } from '@/services/venue.service';
import { EventForm } from '../components/EventForm';

export default async function CreateEventPage() {
  const venues = await VenueService.getAll();
  return (
    <div>
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
          <EventForm venues={venues} />
        </div>
      </section>
    </div>
  );
}
