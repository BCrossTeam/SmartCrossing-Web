import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {signUpPost} from '../actions/signup_actions';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMsgHidden: false
    };
  }

  closeMsg() {
    this.setState({isMsgHidden: true});
  }


  renderMessage() {
    if(this.props.signError.num) {
      return(
        <div className={this.state.isMsgHidden ? `ui negative hidden message` : `ui negative message`}>
          <i onClick={this.closeMsg.bind(this)} className="close icon"></i>
          <div className="header">
            {this.props.signError.content}
          </div>
        </div>
      );
    } else if (this.props.signSuccess) {
      return (
        <div className={this.state.isMsgHidden ? `ui positive hidden message` : `ui positive message`}>
          <i onClick={this.closeMsg.bind(this)} className="close icon"></i>
          <div className="header">
            Gratulacje! Rejestracja przebiegła pomyślnie, możesz pobrać aplikację ;)
          </div>
        </div>
      );
    }
  }

  onSubmit(values) {
    this.props.signUpPost(values).then((res) => {
      this.setState({isMsgHidden: false});
    }).catch((err) => {
      console.log(err);
    });

  }

  render() {
    const { fields: { username, email, passwordField, checkPasswordField }, handleSubmit} = this.props;
    return (
      <form className="ui form sign-up" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>Rejestracja</h2>
        {this.renderMessage()}
        <div className={(username.touched && username.error) ? `field error` : `field`}>
          <label htmlFor='username'>Nazwa użytkownika</label>
          <input name='username' type="text" {...username} />
          {username.touched && ((username.error && <span className="error-message">{username.error}</span>))}
        </div>
        <div className={(email.touched && email.error) ? `field error` : `field`}>
          <label htmlFor='email'>Email</label>
          <input name='email' type="text" {...email} />
          {email.touched && ((email.error && <span className="error-message">{email.error}</span>))}
        </div>
        <div className={(passwordField.touched && passwordField.error) ? `field error` : `field`}>
          <label htmlFor='passwordField'>Hasło</label>
          <input name='passwordField' type="password" {...passwordField} />
          {passwordField.touched && ((passwordField.error && <span className="error-message">{passwordField.error}</span>))}
        </div>
        <div className={(checkPasswordField.touched && checkPasswordField.error) ? `field error` : `field`}>
          <label htmlFor='checkPasswordField'>Powtórz hasło</label>
          <input name='checkPasswordField' type="password" {...checkPasswordField} />
          {checkPasswordField.touched && ((checkPasswordField.error && <span className="error-message">{checkPasswordField.error}</span>))}
        </div>
        <button className="ui button" type="submit" >Zarejestruj</button>
      </form>
    );
  }
}

function validate(values) {
  let legalChars = /[' a-zA-Z_\d\u0104\u0106\u0118\u0141\u0143\u00D3\u015A\u0179\u017B\u0105\u0107\u0119\u0142\u0144\u00F3\u015B\u017A\u017C]*/;
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errors = {};
  const {username, email, passwordField, checkPasswordField} = values;

  if(!username) {
    errors.username = 'Wprowadź nazwę użytkownika!';
  } else if (username.length > 50 || username.length < 4) {
    errors.username = 'Nazwa użytkownika może mieć długość od 4 do 50 znaków.';
  } else if (!legalChars.test(username)) {
    errors.username = 'Nazwa użytkownika zawiera nieprawidłowe znaki.';
  }

  if(!email) {
    errors.email = 'Wprowadź swój adres email!';
  } else if (email.length > 100 || !emailRegex.test(email)) {
    errors.email = 'Nieprawidłowy adres email.'
  }

  if(!passwordField) {
    errors.passwordField = 'Wprowadź hasło!';
  } else if (passwordField.length < 6) {
    errors.passwordField = 'Hasło musi zawierać przynajmniej 6 znaków.';
  } else if (/\W/.test(passwordField)) {
    errors.passwordField = 'Hasło zawiera nieprawidłowe znaki.';
  }

  if(!checkPasswordField) {
    errors.checkPasswordField = 'Powtórz wcześniej wpisane hasło!';
  } else if (checkPasswordField !== passwordField) {
    errors.checkPasswordField = 'Hasła nie są zgodne.';
  }

  return errors;
}

function mapStateToProps(state) {
  return {signError: state.sign.signError, signSuccess: state.sign.signSuccess};
}

export default reduxForm({
  form: 'SignUpForm',
  fields: ['username', 'email', 'passwordField', 'checkPasswordField'],
  validate
}, mapStateToProps, {signUpPost})(SignUp);
