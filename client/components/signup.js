import React, {Component} from 'react';

class SignUp extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="ui form sign-up mini-hidden" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Nazwa użytkownika</label>
          <input type="text" placeholder="Jan Kowalski" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="kocham@ksiazki.pl" />
        </div>
        <div className="field">
          <label>Hasło</label>
          <input type="password" />
        </div>
        <div className="field">
          <label>Powtórz hasło</label>
          <input type="password" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>Akceptuję regulamin oraz warunki korzystania z aplikacji.</label>
          </div>
        </div>
        <button className="ui button" type="submit">Zarejestruj</button>
      </form>
    );
  }
}

export default SignUp;
