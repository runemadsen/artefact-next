import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../fields/input";
import Button from "../fields/button";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.state = {};
  }
  handleInputOnChange(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.state.username,
      this.state.password,
      this.state.email
    );
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            type="text"
            id="signUpUsername"
            name="username"
            placeholder="Username"
            onChange={this.handleInputOnChange}
            autoComplete="off"
            autoCapitalize="off"
            validate="^\S+$"
            validateMessage="No spaces please"
          />
          <Input
            onChange={this.handleInputOnChange}
            type="email"
            id="signUpUsername"
            name="email"
            placeholder="Email"
          />
          <Input
            onChange={this.handleInputOnChange}
            type="password"
            id="signUpPassword"
            name="password"
            placeholder="Strong Password"
          />
          <Button
            onClick={this.handleSubmit}
            type="submit"
            label="Sign Up"
            wide
          />

        </form>
        <style jsx>{`
          form {
            max-width: 400px;
          }
        `}</style>
      </div>
    );
  }
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;
