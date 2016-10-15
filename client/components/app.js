import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../styles/main.scss';
import 'jquery';
import '../../server/public/semantic/dist/semantic.min.js';

import Header from './header';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {test: state.stats.test}
}

export default connect(mapStateToProps)(App);
