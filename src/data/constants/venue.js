import MapMarker from 'assets/images/map-marker.svg';

export const VENUE_LAT_LNG = [-31.41941, -64.18688];
export const VENUE_DESKTOP_DEFAULT_ZOOM = 18;
export const VENUE_MOBILE_DEFAULT_ZOOM = 17;
export const VENUE_MARKER =
  typeof window !== 'undefined'
    ? new (require('leaflet')).Icon({
        iconUrl: MapMarker,
        iconSize: [45, 72],
        iconAnchor: [22.5, 72]
      })
    : null;
