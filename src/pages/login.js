import React, { Component } from 'react';

import AuthService from '../services/authentication.service';
import { fakeUser } from "../storage/user.storage";
import withGreeting from "../hoc/withGreeting";

class LogIn extends Component {

  /** Initial state */
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    if (AuthService.isAuthenticated()) {
      this.props.history.push('/app');
    }
  }

  onEmailChange = event => this.setState({ ...this.state, email: event.target.value });

  onPasswordChange = event => this.setState({ ...this.state, password: event.target.value });

  autoFillForm = () => this.setState({ email: fakeUser.email, password: fakeUser.password });

  handleSubmit = event => {
    event.preventDefault(); // do not reload

    let { email, password } = this.state;
    let user = this.props.logIn(email, password);
    if (user) {
      this.props.history.push('/app', this.props.message);
    } else {
      this.setState({ ...this.state, error: "Wrong email or password." });
    }
  };


  render() {
    return (
      <div className="form-container">
        <img className="mb-4"
             alt="Posts logo"
             src={require('../assets/icon.ico')}
             width={70}
             height={70}
        />
        <h3> Log In </h3>
        <p className="error-message"> {this.state.error} </p>
        <form
          className="login-form"
          onSubmit={this.handleSubmit}>
          <div className="form_element">
            <input
              type="email"
              className="form-control mb-1"
              placeholder="Email address"
              required
              autoFocus
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <button className="btn btn-lg btn-block btn-martian" type="submit">Log in</button>
        </form>
        <p className="dev-note"
          onClick={this.autoFillForm}
        > Click here to automatically fill email and password </p>
      </div>
    );
  }
}

export default withGreeting(LogIn);