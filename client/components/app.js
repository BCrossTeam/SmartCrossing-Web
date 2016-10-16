import React, {Component} from 'react';

import '../styles/main.scss';
import 'jquery';
import '../../server/public/semantic/dist/semantic.min.js';

import Header from './header';
import SectionOne from './section1';
import SectionPause from './section_pause';
import SectionTwo from './section2';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <SectionOne />
        <SectionPause />
        <SectionTwo />
      </div>
    );
  }
}

export default App;
