import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SignUp from '../forms/signUp'
import SignIn from '../forms/signIn'


class SignInOrSignUp extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <div>
        <SignIn onSubmit={this.props.onSignIn}/>
        <SignUp onSubmit={this.props.onSignUp}/>
      </div>
    )
  }

}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
}

export default SignInOrSignUp
