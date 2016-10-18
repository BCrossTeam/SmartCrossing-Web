import React, {Component} from 'react';

import '../styles/section2.scss';
import Tutorial from './tutorial';
import {Element} from 'react-scroll';

class SectionTwo extends Component {

  render() {
    return(
      <Element name="tutorial">
      <section id="section-two">
        <Tutorial />
      </section>
      </Element>
    );
  }
}

export default SectionTwo;
