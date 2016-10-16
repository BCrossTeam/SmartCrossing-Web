import React, {Component} from 'react';
import _ from 'lodash';

import '../styles/section3.scss';

import BookshelvesMap from './bookshelves_map';
import SignUp from './signup';

class SectionThree extends Component {

  render() {
    const mapStyle = {
      height: `500px`,
      boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.9)'
    }
    return(
      <section id="section-three">
        <BookshelvesMap
          containerElement={
            <div style={mapStyle} />
          }
          mapElement={
            <div style={{ height: `500px` }} />
          }
          onMapLoad={_.noop}
        />

        <SignUp />
      </section>
    );
  }
}

export default SectionThree;
