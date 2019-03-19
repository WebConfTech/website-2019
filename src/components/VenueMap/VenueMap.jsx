import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { VENUE_LAT_LNG, VENUE_MARKER } from 'data/constants';
import styles from './styles.module.scss';

export const VenueMap = ({ zoom }) => {
  const position = VENUE_LAT_LNG;
  const icon = VENUE_MARKER;

  return typeof window !== 'undefined' ? (
    <>
      <Map center={position} zoom={zoom} className={styles.map}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon} />
      </Map>
    </>
  ) : null;
};

VenueMap.propTypes = {
  zoom: PropTypes.number.isRequired
};
