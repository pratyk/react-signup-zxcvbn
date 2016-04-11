import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <h1>Home</h1>
        <p>
          When the new user registers, this app will check the users email address and validates.
          If the email is already present, throw error. Also check if two email inputs are same.
        </p>
        <p>
          Check the strength of password using the zxcvbn lib from dropbox.
        </p>
        <p>
          <Link to="/signup" className="btn btn-lg btn-primary" role="button">
            Signup
          </Link>
        </p>
      </div>
    )
  }
})
