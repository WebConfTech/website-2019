import React, { useRef, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { VENUE_LAT_LNG, VENUE_DEFAULT_ZOOM, VENUE_MARKER } from 'data/constants';
import styles from './styles.module.scss';

export const VenueMap = () => {
  const mapRef = useRef(null);
  const position = VENUE_LAT_LNG;
  const zoom = VENUE_DEFAULT_ZOOM;
  const icon = VENUE_MARKER;

  useEffect(() => {
    setTimeout(() => mapRef.current.leafletElement.invalidateSize(), 100);
  }, [mapRef]);

  return typeof window !== 'undefined' ? (
    <>
      <Map center={position} zoom={zoom} className={styles.map} ref={mapRef}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon} />
      </Map>
    </>
  ) : null;
};
