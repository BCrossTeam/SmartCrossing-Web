import React, {Component} from 'react';
import Scroll from 'react-scroll';

import '../styles/header.scss';
const {Events, Link, scrollSpy, Element} = Scroll;


class Header extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return(
      <Element name='start'>
      <header>
        <nav id="navi" className="ui secondary pointing menu fixed centered grid">
          <Link activeClass="active" to="start" spy={true} smooth={true} duration={500} className="item">
            start
          </Link>
          <Link activeClass="active" to="projekt" spy={true} smooth={true} offset={-50} duration={500} className="item">
            projekt
          </Link>
          <img src="/images/wlogo.png" />
          <Link activeClass="active" to="tuto" spy={true} smooth={true} offset={-70} duration={500} className="item">
            pobierz
          </Link>
          <Link activeClass="active" to="register" spy={true} smooth={true} offset={150} duration={500} className="item">
            dołącz do nas!
          </Link>
        </nav>
      </header>
      </Element>
    );
  }
}

export default Header;
