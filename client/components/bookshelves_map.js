import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import fancyMapStyles from '../../server/public/mapStyle.json';

const BookshelfMap = withGoogleMap((props) => {
  return(
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat: 51.1078852, lng: 17.05954760202116 }}
      defaultOptions={{ styles: fancyMapStyles }}>
      {props.markers.map((marker) => {
        return <Marker {...marker} onClick={props.handleMarkerClick.bind(this, marker.key)}/>;
      })}
    </GoogleMap>
  );
});

export default BookshelfMap;
