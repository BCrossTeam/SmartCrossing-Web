import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderField = ({ input, label, type, name, meta: { touched, error } }) => (
      <div className={(touched && error) ? `field error` : `field`}>
        <label htmlFor={name}>{label}</label>
        <input name={name} {...input} type={type}/>
        {touched && ((error && <span className="error-message">{error}</span>))}
      </div>
    );
    const {handleSubmit} = this.props;
    return (
      <form className="ui form " onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Nazwa użytkownika" />
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="passwordField" type="password" component={renderField} label="Hasło" />
        <Field name="checkPasswordField" type="password" component={renderField} label="Powtórz hasło"/>
        <button className="ui button" type="submit" >Zarejestruj</button>
      </form>
    );
  }
}



function validate(values) {
  let illegalChars = /\W/;
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errors = {};
  const {username, email, passwordField, checkPasswordField} = values;

  if(!username) {
    errors.username = 'Wprowadź nazwę użytkownika!';
  } else if (username.length > 50 || username.length < 4) {
    errors.username = 'Nazwa użytkownika może mieć długość od 4 do 50 znaków.';
  } else if (illegalChars.test(username)) {
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
  } else if (illegalChars.test(passwordField)) {
    errors.passwordField = 'Hasło zawiera nieprawidłowe znaki.';
  }

  if(!checkPasswordField) {
    errors.checkPasswordField = 'Powtórz wcześniej wpisane hasło!';
  } else if (checkPasswordField !== passwordField) {
    errors.checkPasswordField = 'Hasła nie są zgodne.';
  }

  return errors;
}

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUp);
