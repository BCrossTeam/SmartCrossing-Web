import React, {Component} from 'react';

import '../styles/section2.scss';
import Tutorial from './tutorial';

class SectionTwo extends Component {

  render() {
    return(
      <section id="section-two">
        <Tutorial />
      </section>
    );
  }
}

export default SectionTwo;
