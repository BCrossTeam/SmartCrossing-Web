import React, {Component} from 'react';
import Scroll from 'react-scroll';

import '../styles/header.scss';
const {Events, Link, scrollSpy, Element} = Scroll;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

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

  jqery() {
    let {menu} = this.state;
    if(!menu) {
      $('.mob-item').css("display", "block");
    } else if (menu) {
      $('.mob-item').css("display", "none");
    }
    this.setState({menu: !menu});
  }

  render() {
    return(
      <Element name='start'>
      <header>
        <nav id="navi" className="ui secondary pointing menu fixed stackable centered grid">
          <a className="item mob-menu">Menu<img src="/images/menu.png" id="menu-button" onClick={this.jqery.bind(this)}/></a>
          <Link activeClass="active" to="start" spy={true} smooth={true} duration={500} className="item mob-item">
            start
          </Link>
          <Link activeClass="active" to="projekt" spy={true} smooth={true} offset={-50} duration={500} className="item mob-item">
            projekt
          </Link>
          <img src="/images/wlogo.png" className="logo-img" />
          <Link activeClass="active" to="tuto" spy={true} smooth={true} offset={-70} duration={500} className="item mob-item">
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
