'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Venue } from '../../../../db';

interface EventMapProps {
  venue: Venue;
}

export function EventMap(props: EventMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

  const defaultCenter = { lat: 18.667897, lng: -71.449344 };

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={{ height: '200px' }}
      zoom={15}
      center={props.venue?.data?.geometry.location || defaultCenter}
    >
      <Marker
        position={props.venue?.data?.geometry.location || defaultCenter}
      />
    </GoogleMap>
  );
}
