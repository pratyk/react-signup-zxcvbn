import React from 'react';
import zxcvbn from 'zxcvbn';

// Sample email data. Future version will use ajax calls to fetch this data.
const emailData = [
  'one@email.com',
  'two@email.com',
  'three@email.com',
  'four@email.com',
  'five@email.com',
  'six@email.com'
];

// Regex to check the whether the email is valid. Taken from:
// https://www.w3.org/TR/html-markup/input.email.html#input.email.attrs.value.single
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Component that checks the strength of password using zxcvbn lib from dropbox.
function PasswordStrengthMeter(props) {
  let pwStrength = zxcvbn(props.password);
  let progressBar = (pwStrength.score * 25) + '%';
  let progressCSS = 'progress-bar';
  let progressText = '';

  switch(pwStrength.score) {
    case 0:
      break;
    case 1:
      progressCSS += ' progress-bar-danger';
      progressText = 'Weak password';
      break;
    case 2:
      progressCSS += ' progress-bar-danger';
      progressText = 'Weak password';
      break;
    case 3:
      progressCSS += ' progress-bar-warning';
      progressText = 'Good password';
      break;
    case 4:
      progressCSS += ' progress-bar-success';
      progressText = 'Strong password';
      break;
    default:
      console.log('sdf');
  }

  return (
    <div className="form-group">
      <div className="progress">
        <div className={progressCSS} style={{width: progressBar}}>
        </div>
      </div>
      <p className="pull-right">{progressText}</p>
    </div>
  )
}

export default React.createClass({
  getInitialState() {
    return {
      email: '',
      confirmEmail: '',
      password: '',
      errorMessage: '',
      emailIsEqual: false,
      emailIsValid: false,
    }
  },

  setEmail(event) {
    let email = event.target.value;
    this.setState({email: email});
  },

  validateEmail() {
    if (!emailRegex.test(this.state.email)) {
      this.setState({errorMessage: "The email format is incorrect."});
    } else {
      this.setState({errorMessage: null});
      this.validateEmailFromServer(this.state.email);
    }
  },

  validateEmailFromServer(email) {
    for (let e of emailData) {
      if (email === e) {
        this.setState({errorMessage: "It seems the account already exists."})
      }
    }
  },

  confirmEmail(event) {
    this.setState({confirmEmail: event.target.value});
  },

  validateConfirmEmail() {
    if (this.state.email !== this.state.confirmEmail) {
      this.setState({errorMessage: "Emails do not match"});
    } else {
      this.setState({errorMessage: null});
    }
  },

  setPassword(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>{ this.state.errorMessage || "Sign up with your email address."}</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.setEmail}
              onBlur={this.validateEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Email"
              value={this.state.confirmEmail}
              onChange={this.confirmEmail}
              onBlur={this.validateConfirmEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.setPassword}
            />
          </div>
          <PasswordStrengthMeter password={this.state.password}/>
          <button type="submit" className="btn btn-default">Sign up</button>
        </form>
      </div>
    )
  }
})