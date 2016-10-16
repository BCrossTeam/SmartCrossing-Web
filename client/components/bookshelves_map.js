import React, {Component} from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

const BookshelfMap = withGoogleMap((props) => {

  return(
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat: 51.1078852, lng: 17.05954760202116 }}
    />
  );
});

export default BookshelfMap;
