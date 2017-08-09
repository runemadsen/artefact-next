import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../fields/input";
import Button from "../fields/button";

class SignIn extends Component {

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
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            onChange={this.handleInputOnChange}
            type="text"
            id="signInUsername"
            name="username"
            placeholder="Your Username"
            autoComplete="off"
            autoCapitalize="off"
            validate="^\S+$"
            validateMessage="No spaces please"
          />
          <Input
            onChange={this.handleInputOnChange}
            type="password"
            id="signInPassword"
            name="password"
            placeholder="Your Password"
          />
          <Button
            onClick={this.handleSubmit}
            type="submit"
            label="Sign In"
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

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignIn;
