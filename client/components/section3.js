import React, {Component} from 'react';
import _ from 'lodash';

import '../styles/section3.scss';
import {Element} from 'react-scroll';
import {connect} from 'react-redux';
import {fetchBookshelves, fetchBooks} from '../actions/map_actions';

import BookshelvesMap from './bookshelves_map';
import BookList from './books_list';
import SignUp from './signup';

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

    return(
      <Element name='register'>
        <section id="section-three">
          <BookshelvesMap
            markers={markers}
            containerElement={<div className="google-map" />}
            mapElement={<div className="google-map-element" />}
            onMapLoad={_.noop}
            handleMarkerClick={this.handleMarkerClick.bind(this)}
          />
          <div className="ui container">
          <SignUp />
          <BookList/>
          </div>
        </section>
      </Element>
    );
  }
}

function mapStateToProps(state) {
  return {map: state.map};
}

export default connect(mapStateToProps, {fetchBookshelves, fetchBooks})(SectionThree);
