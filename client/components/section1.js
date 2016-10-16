import React, {Component} from 'react';
import {Element} from 'react-scroll';

import '../styles/section1.scss';

import StatsModule from './stats';

class SectionOne extends Component {
  render() {
    return(
      <section id="section-one"><Element name="projekt">
        <div className="ui container">
          <StatsModule />
          <img src="/images/wroc.jpg" className="book-img" alt=""/>
          <h1>SmartCrossing</h1>
          <div className="ui grid equal width sec-one-content">
            <div className="row">
              <div className="column"><p>najchwytliwsza książka komponent</p></div>
              <div className="column"><p>Aenean varius gravida nibh ultrices aliquet. Mauris sagittis eu justo quis ullamcorper. Pellentesque a pellentesque tellus. Aenean aliquet massa id lacus fringilla, eu vestibulum sem molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus a lectus nec rutrum. Aliquam erat volutpat. Morbi tristique, metus quis ultricies feugiat, lacus sem consequat est, nec varius lacus risus sed justo. Donec felis erat, rutrum id est ac, efficitur gravida purus.</p></div>
              <div className="column"><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo at justo in malesuada. Suspendisse sed tempus dolor. Fusce laoreet mauris dolor, at porttitor augue sodales in. Sed eget vehicula purus. Nullam et est non orci rutrum auctor. Pellentesque non pharetra nunc, sed malesuada velit. Integer pretium maximus enim, quis porta arcu iaculis a. Vivamus mattis tincidunt ipsum, eget tristique tortor ultrices vitae.</p></div>
            </div>
          </div>
        </div></Element>
      </section>
    );
  }
}

export default SectionOne;
