import React, { Component } from "react";
import PropTypes from "prop-types";

import SignUp from "../forms/signUp";
import SignIn from "../forms/signIn";

class SignInOrSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.state.signin) {
      return (
        <div>
          <SignIn onSubmit={this.props.onSignIn} />
          <p>
            {"or "}
            <a onClick={() => this.setState({ signin: false })}>sign up</a>
          </p>
        </div>
      );
    }
    return (
      <div>
        <SignUp onSubmit={this.props.onSignUp} />
        <p>
          {"Already have an account? "}
          <a onClick={() => this.setState({ signin: true })}>sign in</a>
        </p>
      </div>
    );

    return null;
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

export default SignInOrSignUp;
