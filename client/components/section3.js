import React, {Component} from 'react';
import _ from 'lodash';

import '../styles/section3.scss';
import {Element} from 'react-scroll';
import {connect} from 'react-redux';
import {fetchBookshelves, fetchBooks} from '../actions/map_actions';

import BookshelvesMap from './bookshelves_map';
import BookList from './books_list';

class SectionThree extends Component {
  componentWillMount() {
    this.props.fetchBookshelves().then(this.props.fetchBooks(1));
  }

  handleMarkerClick(id) {
    this.props.fetchBooks(id);
  }

  render() {
    const markers = [];
    _.forIn(this.props.map.bookshelves, (val, key) => {
      markers.push({
        position: {
          lat: val.bookshelf_latitude,
          lng: val.bookshelf_longitude
        },
        key: val.bookshelf_id,
        defaultAnimation: 2
      });
    });

    const mapStyle = {
      height: `500px`,
      boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.9)'
    }
    return(
      <Element name='register'>
        <section id="section-three">
          <BookshelvesMap
            markers={markers}
            containerElement={<div style={mapStyle} />}
            mapElement={<div style={{ height: `500px` }} />}
            onMapLoad={_.noop}
            handleMarkerClick={this.handleMarkerClick.bind(this)}
          />
          <BookList/>
        </section>
      </Element>
    );
  }
}

function mapStateToProps(state) {
  return {map: state.map};
}

export default connect(mapStateToProps, {fetchBookshelves, fetchBooks})(SectionThree);
