import classNames from 'classnames';
import styles from './styles.module.css';
import { VenueCard } from '@/components/VenueCard';
import { VenueService } from '@/services/venue.service';

export default async function VenuesPage() {
  const venues = await VenueService.getAll();
  return (
    <div>
      <section className="py-4 bg-light  inner-header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">Venues</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <a
                href="/venues/create"
                className="float-right d-sm-inline-block btn btn-sm btn-primary text-xs"
              >
                New Vennue
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light border-top">
        <div className="container">
          <div className="row list-bp">
            {venues.map((venue) => (
              <div key={venue.id} className="col-xl-3 col-md-4 mb-4">
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
