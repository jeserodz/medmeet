'use client';
import { Venue } from '@/db';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

interface Props {
  venue: Venue;
}

export function VenueCard(props: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

  const defaultCenter = { lat: 18.667897, lng: -71.449344 };

  return (
    <div className="card offer-card shadow border-0">
      <a href={`/venues/${props.venue.id}`}>
        <div className="m-card-cover" style={{ height: 200 }}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={{ height: '200px' }}
              zoom={props.venue.data ? 15 : 6}
              options={{ gestureHandling: 'false' }}
              center={props.venue.data?.geometry.location || defaultCenter}
            >
              {props.venue.data && (
                <Marker position={props.venue.data.geometry.location} />
              )}
            </GoogleMap>
          )}
        </div>
        <div className="card-body p-3">
          <p className="card-text text-gray-900 mt-3 mb-1">
            {props.venue.name}{' '}
          </p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-map-marker-alt fa-sm mr-1" />{' '}
              {props.venue.data?.formatted_address}
            </small>
          </p>
        </div>
      </a>
    </div>
  );
}
