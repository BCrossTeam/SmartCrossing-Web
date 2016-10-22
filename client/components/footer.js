import React, {Component} from 'react';

import '../styles/footer.scss';

class Footer extends Component {

  renderTeam() {
    const team = [
      {
        name: 'Michał Szachniewicz',
        role: 'Webmaster',
        avatar: "/images/szacho.jpg"
      },
      {
        name: 'Sebastian Zasuwa',
        role: 'Back-end',
        avatar: "/images/users.png"
      },
      {
        name: 'Arkadiusz Mirecki',
        role: 'Front-end',
        avatar: "/images/users.png"
      },
      {
        name: 'Jakub Dworzański',
        role: 'Public Relations',
        avatar: "/images/users.png"
      },
      {
        name: 'Joachim Schmidt',
        role: 'Front-end',
        avatar: "/images/users.png"
      },
      {
        name: 'Jerzy Wroczyński',
        role: 'Graphic Design',
        avatar: "/images/jerzy.png"
      },
    ];
    return team.map((member) => {
      return(
        <div className="item" key={member.name}>
          <img className="ui avatar image" src={member.avatar} />
          <div className="content">
            <div className="header">{member.name}</div>
            {member.role}
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <footer>

        <div className="ui list contact">
          <div className="item">
            <i className="users middle aligned icon"></i>
            <div className="content">
              BCrossTeam
            </div>
          </div>
          <div className="item">
            <i className="marker middle aligned icon"></i>
            <div className="content">
              Wrocław, ALO PWr
            </div>
          </div>
          <div className="item">
            <i className="mail middle aligned icon"></i>
            <div className="content">
              <a href="mailto:bcrossteam@gmail.com">bcrossteam@gmail.com</a>
            </div>
          </div>
          <div className="item">
            <i className="github middle aligned icon"></i>
            <div className="content">
              <a className="header" href="https://github.com/BCrossTeam" target="_blank">BCrossTeam/SmartCrossing</a>
            </div>
          </div>
        </div>

        <div className="wrapper">
        <div className="credits">
          <div>Icons made by
            a few authors from<a target="_blank" href="http://www.flaticon.com" title="Flaticon"> www.flaticon.com </a>
             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
          </div>
        </div>
        <div className="ui horizontal list team-list">
          {this.renderTeam()}
        </div>
        </div>

        <div className="mob-foot">
        <div className="credits">
          <div className="copyrights">
          <span>&copy; 2016 BCrossTeam</span>
          </div>
          <div>Icons made by
            a few authors from<a target="_blank" href="http://www.flaticon.com" title="Flaticon"> www.flaticon.com </a>
             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
          </div>
        </div>
        <div className="ui relaxed divided list">
          <div className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <a className="header" href="https://github.com/BCrossTeam" target="_blank">BCrossTeam/SmartCrossing</a>
            </div>
          </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
