import React, {Component} from 'react';
import {Element} from 'react-scroll';

import '../styles/section1.scss';

import StatsModule from './stats';
import TopReaders from './top_readers';

class SectionOne extends Component {
  render() {
    return(
      <Element name="projekt" id="section-one">
        <div className="ui container">
          <StatsModule />
          <img src="/images/wroc.jpg" className="book-img" alt=""/>
          <h1>SmartCrossing</h1>
          <div className="ui grid equal width sec-one-content">
            <div className="row">
              <div className="column"><p>Według nas "smart city" to nie inteligentne technologie a mieszkańcy! Apka powstała podczas <span className="highlighted">hackatonu "Hack Heroes"</span> organizowanego przez serwis Apki.org, z okazji odbywającego się <span className="highlighted">#codeweeka</span>. Aplikacja SmartCrossing to aplikacja wspierająca bookcrossing - wymianę książek. Użytkownik rejestruje się i może przeglądać wszystkie półki z książkami, które znajdują się w jego okolicy. Jeśli uzna, że takowych półek jest za mało, może dodać propozycję nowej półki, która jest rozpatrywana drogą głosowania.</p></div>
              <div className="column"><p> Istnieje również opcja dodawania książek do systemu. Czynność ta została znacznie uproszczona, ponieważ wystarczy zeskanować kod kreskowy, a aplikacja sama pobierze potrzebne jej informacje. Całość została wzbogacona o system punktów, odznak i ranking, co czyni aplikację jeszcze ciekawszą i bardziej motywującą! I pamiętaj: chcesz żeby Twoje otoczenie było smart? <span className="motto">Zacznij od siebie!</span></p></div>
              <div className="column"><TopReaders /></div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default SectionOne;
