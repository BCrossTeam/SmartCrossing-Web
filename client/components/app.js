import React, {Component} from 'react';

import '../styles/main.scss';

import Header from './header';
import SectionOne from './section1';
import SectionPause from './section_pause';
import SectionTwo from './section2';
import SectionThree from './section3';
import Footer from './footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <SectionOne />
        <SectionPause />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    );
  }
}

export default App;
