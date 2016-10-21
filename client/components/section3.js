import React, {Component} from 'react';
import _ from 'lodash';
import {animateScroll as scroll} from 'react-scroll';
import axios from 'axios';

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
      screenWidth: window.innerWidth
    };
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({screenWidth: window.innerWidth});
    });
  }
  componentWillMount() {
    this.props.fetchBookshelves().then(this.props.fetchBooks(1));
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
        <section id="section-three">
          <BookshelvesMap
            markers={markers}
            containerElement={<div className="google-map" />}
            mapElement={<div className="google-map-element" />}
            handleMarkerClick={this.handleMarkerClick.bind(this)}
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
