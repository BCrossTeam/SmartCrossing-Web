import React, {Component} from 'react';
import _ from 'lodash';
import {animateScroll as scroll} from 'react-scroll';
import axios from 'axios';
import canUseDOM from "can-use-dom";
import raf from "raf";

import '../styles/section3.scss';
import {Element} from 'react-scroll';
import {connect} from 'react-redux';
import {fetchBookshelves, fetchBooks} from '../actions/map_actions';

import BookshelvesMap from './bookshelves_map';
import BookList from './books_list';
import SignUp from './signup';

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Twoja przeglądarka nie obsługuje geolokalizacji.`);
    },
  })
);

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      center: null,
      content: null,
      radius: 2000
    };
    this.isUnmounted = false;
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({screenWidth: window.innerWidth});
    });
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: null,
      });

      raf(tick);
    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: 52.241,
          lng: 21.0012
        },
        content: `Błąd: Funkcja geolokalizacji zawiodła: (${reason}).`,
        radius: 0
      });
    });
  }
  componentWillMount() {
    this.props.fetchBookshelves().then(this.props.fetchBooks(11));
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleMarkerClick(id) {
    this.props.fetchBooks(id);
  }

  renderSecondPart() {
    if(this.state.screenWidth < 767) {
      return(
        <Element name='register' className="ui container">
        <BookList />
        <SignUp onSubmit={this.handleSubmit}/>
        </Element>
      );
    } else {
      return (
        <Element name='register' className="ui container">
        <SignUp onSubmit={this.handleSubmit} />
        <BookList />
        </Element>
      );
    }
  }

  render() {
    const markers = [];
    _.forIn(this.props.map.bookshelves, (val, key) => {
      if(this.props.map.activeBooks && this.props.map.activeBooks.bookshelf_id == val.bookshelf_id) {
        markers.push({
          position: {
            lat: val.bookshelf_latitude,
            lng: val.bookshelf_longitude
          },
          key: val.bookshelf_id,
          defaultAnimation: 2,
          icon: '/images/markerActive.png'
        });
      } else {
        markers.push({
          position: {
            lat: val.bookshelf_latitude,
            lng: val.bookshelf_longitude
          },
          key: val.bookshelf_id,
          defaultAnimation: 2,
          icon: '/images/marker.png'
        });
      }

    });

    return(
        <section id="section-three">
          <BookshelvesMap
            markers={markers}
            containerElement={<div className="google-map" />}
            mapElement={<div className="google-map-element" />}
            handleMarkerClick={this.handleMarkerClick.bind(this)}
            center={this.state.center}
            content={this.state.content}
            radius={this.state.radius}
          />
          {this.renderSecondPart()}
        </section>
    );
  }
}

function mapStateToProps(state) {
  return {map: state.map};
}

export default connect(mapStateToProps, {fetchBookshelves, fetchBooks})(SectionThree);
