import React, { Component } from 'react';


class LogIn extends Component {

  state = {
    email: "",
    password: "",
  };

  onEmailChange = event => this.setState({ ...this.state, email: event.target.value });

  onPasswordChange = event => this.setState({ ...this.state, password: event.target.value });

  handleSubmit = event => {
    event.preventDefault(); // do not reload

    if (this.validateUser()) {
      this.props.history.push("/app");
    } else {
      this.setState({ ...this.state, error: "Wrong email or password." });
    }
  };

  validateUser = () => {
    let { email, password } = this.state;
    if (email === "user1@test.com" && password === "test1") return true;
    if (email === "user2@test.com" && password === "test2") return true;
    return false;
  };

  render() {
    return (
      <div className="form-container">
        <img className="mb-4"
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
              className="form-control"
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
      </div>
    );
  }
}

export default LogIn;