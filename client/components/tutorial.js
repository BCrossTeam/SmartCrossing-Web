import React, {Component} from 'react';

class Tutorial extends Component {
  render() {
    return(

      <div className="ui container">

        <div className="ui three cards mob-hidden">
          <a className="red card">
            <div className="image">
            <img src="/images/download-app.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/scan-book.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/readit.png" />
            </div>
          </a>
        </div>

        <div className="ui grid equal width mob-hidden">
          <div className="row">
            <div className="column">
              <span className="step">zainstaluj</span><hr/>
              <p>Aplikacja jest niezbędna podczas uwalniania książek - automatycznie dodaje je do bazy danych oraz umożliwia zbieranie punktów i zdobywanie osiągnięć za Twoją aktywność.</p>
            </div>
            <div className="column">
              <span className="step">skanuj</span><hr/>
              <p>Skanując kod kreskowy książki, dostarczasz do systemu wszystkie niezbędne o niej informacje, dzięki czemu nie musisz ich wprowadzać ręcznie, a cała operacja trwa zaledwie tyle, co zrobienie zdjęcia.</p>
            </div>
            <div className="column">
              <span className="step">czytaj</span><hr/>
              <p>Ostatnim krokiem jest nic innego jak samo czytanie, jednak pamiętaj czytelniku, że potrzebujemy Ciebie, aby wspólnie tworzyć żywą bibliotekę. Jeżeli możesz, zajrzyj do nas od czasu do czasu ;]</p>
            </div>
          </div>
        </div>

        <div className="ui stackable cards desk-hidden">
          <a className="red card">
            <div className="image">
            <img src="/images/download-app.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/scan-book.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/readit.png" />
            </div>
          </a>
        </div>

        <a href="https://play.google.com/store/apps/details?id=com.futurologeek.smartcrossing" target="_blank"><img src="/images/google.png" className="ui centered image download" /></a>
      </div>
    );
  }
}

export default Tutorial;
