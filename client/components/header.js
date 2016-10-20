import React, {Component} from 'react';
import Scroll from 'react-scroll';

import '../styles/header.scss';
const {Events, Link, scrollSpy, Element} = Scroll;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {menu: false};
  }
  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    scrollSpy.update();

    window.addEventListener('resize', () => {
      if(window.innerWidth > 767) {
        $('.mob-item').css("display", "block");
        this.setState({menu: true});
      } else {
        this.setState({menu: false});
        $('.mob-item').css("display", "none");
      }
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleMenuClick() {
    if(!this.state.menu) {
      $('.mob-item').css("display", "block");
      this.setState({menu: true});
    } else {
      $('.mob-item').css("display", "none");
      this.setState({menu: false});
    }
  }

  render() {
    return(
      <Element name='start'>
      <header>
        <nav id="navi" className="ui secondary pointing menu fixed stackable centered grid">
          <a className="item mob-menu" onClick={this.handleMenuClick.bind(this, event)}>Menu<img src="/images/menu.png" id="menu-button" /></a>
          <Link activeClass="active" to="start" spy={true} smooth={true} duration={500} className="item mob-item">
            start
          </Link>
          <Link activeClass="active" to="projekt" spy={true} smooth={true} offset={-50} duration={500} className="item mob-item">
            projekt
          </Link>
          <img src="/images/logo.png" className="logo-img" />
          <Link activeClass="active" to="tutorial" spy={true} smooth={true} offset={-70} duration={500} className="item mob-item">
            pobierz
          </Link>
          <Link activeClass="active" to="register" spy={true} smooth={true} offset={50} duration={500} className="item mob-item">
            dołącz do nas!
          </Link>
        </nav>
      </header>
      </Element>
    );
  }
}

export default Header;
