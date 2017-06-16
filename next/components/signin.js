import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SignIn extends Component {

  handleSubmit(e) {
    e.preventDefault()
    // Grab directly from input fields via ID's.
    // Replace with Martin's components when ready
    let username = document.getElementById('signInUsername').value
    let password = document.getElementById('signInPassword').value
    this.props.onSubmit(username, password)
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form autoComplete="off" onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" id="signInUsername" name="username" placeholder="Pick a username" /><br />
          <input type="password" id="signInPassword" name="password" placeholder="Create a password" /><br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }

}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignIn
