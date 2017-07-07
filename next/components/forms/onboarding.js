import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Status from '../fields/status'
import Input from '../fields/input'
import Select from '../fields/select'
import Toggle from '../fields/toggle'



class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state={ type: 'artist'}
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(name, value){
    this.props.onChange(name, value)
    // console.log('changed %s to %s', name, value )
    let newState = {}
    newState[name]=value
    this.setState(newState)
  }


  render() {
    let profile = this.props.profile || this.state
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Now tell me a little bit about yourself...</p>
        <form>
          <Status status="saved" />
          <Input label="name" name="name" value={profile.name} name="name"
            onChange={this.handleOnChange} autoCapitalize="words"/>
          <Input label="email" name="email" type="email" value={profile.email}
            onChange={this.handleOnChange} autoCapitalize="off"/>
          <Input label="phone" name="phone" type="tel" value={profile.phone}
            onChange={this.handleOnChange}/>
          <Input label="address" name="address_1" value={profile.address_1}
            onChange={this.handleOnChange}/>
          <Input label name="address_2" value={profile.address_2}
            onChange={this.handleOnChange}/>
          <Input>
            <Input label="city" name="city" value={profile.city}
              onChange={this.handleOnChange} autoCapitalize="words"/>
            <Input label="postal code" name="postal" value={profile.postal}
              onChange={this.handleOnChange}/>
          </Input>
          <Input>
            <Input label="state" name="state" value={profile.state}
              onChange={this.handleOnChange} autoCapitalize="words"/>
            <Input label="country" name="country" value={profile.country}
              onChange={this.handleOnChange}/>
          </Input>
          <Toggle label="type" name="type" value={profile.type}
            options={['Artist','Collector']} onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }

}

Onboarding.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Onboarding
