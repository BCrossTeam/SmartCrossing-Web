import React, {Component} from 'react';
import _ from 'lodash';
import {animateScroll as scroll} from 'react-scroll';

import '../styles/section3.scss';
import {Element} from 'react-scroll';
import {connect} from 'react-redux';
import {fetchBookshelves, fetchBooks} from '../actions/map_actions';

import BookshelvesMap from './bookshelves_map';
import BookList from './books_list';
import SignUp from './signup';

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false
    };
  }
  componentWillMount() {
    this.props.fetchBookshelves().then(this.props.fetchBooks(1));
  }

  handleMarkerClick(id) {
    this.props.fetchBooks(id);
  }

  showSignUp() {
    this.setState({showSignUp: !this.state.showSignUp});
    if(!this.state.showSignUp) {
      scroll.scrollMore(350);
    }
  }

  handleSubmit(values) {
    console.log(values);
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
        defaultAnimation: 2,
        icon: '/images/marker.png'
      });
    });

    return(
        <Element name='register' id="section-three">
          <h2 className="maxi-hidden" onClick={this.showSignUp.bind(this)}>rejestracja</h2>
          <BookshelvesMap
            markers={markers}
            containerElement={<div className="google-map" />}
            mapElement={<div className="google-map-element" />}
            onMapLoad={_.noop}
            handleMarkerClick={this.handleMarkerClick.bind(this)}
          />
          <div className="ui container">
          <div className={this.state.showSignUp ? `sign-up` : `mini-hidden sign-up`}><SignUp onSubmit={this.handleSubmit}/></div>
          <BookList />
          </div>
        </Element>
    );
  }
}

function mapStateToProps(state) {
  return {map: state.map};
}

export default connect(mapStateToProps, {fetchBookshelves, fetchBooks})(SectionThree);
