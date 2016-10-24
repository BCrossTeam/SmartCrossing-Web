import React from 'react';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import {withGoogleMap, GoogleMap, Marker, Circle, InfoWindow} from 'react-google-maps';
import fancyMapStyles from '../../server/public/mapStyle.json';

const BookshelfMap = withGoogleMap((props) => {
  return(
    <GoogleMap
      defaultZoom={14}
      center={props.center}
      defaultOptions={{ styles: fancyMapStyles }}>

      {props.center && props.content && (
        <InfoWindow position={props.center}>
          <div>{props.content}</div>
        </InfoWindow>
      )}
      {props.center && (
        <Circle
          center={props.center}
          radius={props.radius}
          options={{
            fillColor: `#B90504`,
            fillOpacity: 0.20,
            strokeColor: `#B90504`,
            strokeOpacity: 1,
            strokeWeight: 1,
          }}
        />
      )}

      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
      {props.markers.map((marker) => {
        return <Marker {...marker} onClick={props.handleMarkerClick.bind(this, marker.key)}/>;
      })}
      </MarkerClusterer>
    </GoogleMap>
  );
});

export default BookshelfMap;
