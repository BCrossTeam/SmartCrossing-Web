import React, {Component} from 'react';

import '../styles/section2.scss';
import Tutorial from './tutorial';
import {Element} from 'react-scroll';

class SectionTwo extends Component {

  render() {
    return(
      <Element name="tutorial" id="section-two">
            <h2>Jak to działa?</h2>
        <Tutorial />
      </Element>
    );
  }
}

export default SectionTwo;
