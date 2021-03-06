import React, {Component} from 'react';

import '../../server/public/semantic.min.css';
import '../styles/main.scss';
import '../../server/public/jquery.min.js';
import '../../server/public/semantic.min.js';

import Header from './header';
import SectionOne from './section1';
import SectionTwo from './section2';
import SectionThree from './section3';
import Footer from './footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    );
  }
}

export default App;
