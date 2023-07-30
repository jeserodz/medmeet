import Image from 'next/image';
import Link from 'next/link';
import { getDateParts } from '../service';

export type EventCardProps = {
  title: string;
  date: Date;
  location: string;
  image: string;
  id: string | number;
  url?: string;
};

export function EventCard(props: EventCardProps) {
  const dateParts = getDateParts(props.date);

  return (
    <div className="card e-card shadow border-0">
      <a href={props.url || `/events/${props.id}`}>
        <div className="m-card-cover">
          <Image
            width={534}
            height={799}
            src={props.image || '/img/e1.jpg'}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body p-0">
          <div className="row no-gutters align-items-center">
            {dateParts && (
              <div className="col-2 auto py-3 pl-3">
                <div className="bg-white rounded text-center">
                  <h6 className="text-danger mb-0 font-weight-bold">
                    {dateParts.DD}
                  </h6>
                  <small className="text-muted">{dateParts.MMM}</small>
                </div>
              </div>
            )}
            <div className="col-10 p-3">
              <p className="card-text text-gray-900 mb-1">{props.title}</p>
              <p className="card-text">
                <small className="text-muted">
                  <i className="fas fa-map-marker-alt fa-sm mr-1" />
                  {props.location}
                </small>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
