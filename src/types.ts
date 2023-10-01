export type APIRequestContext = {
  params: {
    id: string;
  };
};

export type GoogleMapsPlace = {
  business_status: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: {};
  photos: Array<{
    height: number;
    html_attributions: Array<string>;
    photo_reference: string;
    width: number;
  }>;
  place_id: string;
  rating: number;
  reference: string;
  types: Array<string>;
  user_ratings_total: number;
};
