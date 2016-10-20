import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {signUpPost} from '../actions/signup_actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: {username, email, password, checkPassword}, handleSubmit} = this.props;
    console.log(this.props);
    return (
      <form className="ui form " onSubmit={handleSubmit(this.props.signUpPost)}>
        <div className="field">
          <label>Nazwa użytkownika</label>
          <input type="text" placeholder="Jan Kowalski" {...username} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="kocham@ksiazki.pl" {...email} />
        </div>
        <div className="field">
          <label>Hasło</label>
          <input type="password" {...password} />
        </div>
        <div className="field">
          <label>Powtórz hasło</label>
          <input type="password" {...checkPassword} />
        </div>
        <button className="ui button" type="submit" >Zarejestruj</button>
      </form>
    );
  }
}



export default reduxForm({
  form: 'SignUpForm',
  fields: ['username', 'email', 'password', 'checkPassword']
}, null, {signUpPost})(SignUp);
