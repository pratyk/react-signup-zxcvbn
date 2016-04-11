import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand" onlyActiveOnIndex>React Signup zxcvbn</Link>
            </div>
            {/*<div className="nav nav-pills">*/}
              <ul className="nav navbar-nav">
                <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </ul>
            {/*</div>*/}
          </div>
        </nav>
        <div className="container">
          {/* Render clild components here */}
          {this.props.children}
        </div>
      </div>
    )
  }
});
