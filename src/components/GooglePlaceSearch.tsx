'use client';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { Combobox } from '@headlessui/react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { GoogleMapsPlace } from '../types';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 18.667897,
  lng: -71.449344,
};

export interface GooglePlaceSearchProps {
  place?: GoogleMapsPlace | null;
  onChange?: (place: GoogleMapsPlace | null) => void;
}

export function GooglePlaceSearch(props: GooglePlaceSearchProps) {
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState<GoogleMapsPlace[]>([]);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(props.place);
  const [hoveredPlace, setHoveredPlace] = useState<GoogleMapsPlace | null>();
  const [query, setQuery] = useState('');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchPlaces = useCallback(
    debounce(async function searchPlaces(query: string) {
      setPlaces([]);
      setPlacesLoading(true);

      const response = await axios.get('/api/maps/search-places', {
        params: { query },
      });

      setPlaces(response.data);
      setPlacesLoading(false);
    }, 1000),
    []
  );

  const onLoad = useCallback(function onLoadCallback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function onUnmountCallback(map: any) {
    setMap(null);
  }, []);

  useEffect(
    function onQueryChange() {
      if (!query) return setPlaces([]);
      searchPlaces && searchPlaces(query);
    },
    [query, searchPlaces]
  );

  useEffect(
    function onSelectedPlaceChange() {
      setQuery('');
      setHoveredPlace(null);
      props.onChange && props.onChange(selectedPlace || null);
    },
    [props, selectedPlace]
  );

  return (
    <div className="form-group">
      <label>Search Place</label>
      <div className="form-group">
        <Combobox value={selectedPlace || null} onChange={setSelectedPlace}>
          <div className="dropdown">
            <div className="input-group">
              <Combobox.Input
                className="form-control"
                onChange={(event) => setQuery(event.target.value)}
                value={query}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  {!!selectedPlace ? selectedPlace.name : 'Search'}
                </span>
              </div>
            </div>
            <Combobox.Options className="dropdown-menu">
              {placesLoading ? (
                <Combobox.Option value={null} className="dropdown-item">
                  Loading...
                </Combobox.Option>
              ) : (
                places.map((place) => (
                  <Combobox.Option
                    key={place.place_id}
                    value={place}
                    className="dropdown-item"
                    onMouseOver={() => setHoveredPlace(place)}
                    onMouseOut={() => setHoveredPlace(undefined)}
                  >
                    {place.name}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
      <div className="mt-2">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              hoveredPlace
                ? hoveredPlace?.geometry.location
                : selectedPlace
                ? selectedPlace.geometry.location
                : center
            }
            zoom={selectedPlace || hoveredPlace ? 18 : 7}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {hoveredPlace && (
              <Marker position={hoveredPlace.geometry.location} />
            )}

            {!hoveredPlace && selectedPlace && (
              <Marker position={selectedPlace.geometry.location} />
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
