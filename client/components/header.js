import React, {Component} from 'react';

import '../styles/header.scss';

class Header extends Component {
  render() {
    return(
      <header>
        <nav id="navi" className="ui secondary pointing menu centered grid">
          <a className="item">Start</a>
          <a className="item">Projekt</a>
          <img src="/images/logo.png" />
          <a className="item">poradnik</a>
          <a className="item">Kontakt</a>
        </nav>
      </header>
    );
  }
}

export default Header;
