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
    console.log('changed %s to %s', name, value )
    let newState = {}
    newState[name]=value
    this.setState(newState)
  }


  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Now tell me a little bit about you</p>
        <form>
          <Status status="saved" />
          <Input label="name" name="name" value={this.state.name} name="name"
            onChange={this.handleOnChange} autoCapitalize="words"/>
          <Input label="email" name="email" type="email" value={this.state.email}
            onChange={this.handleOnChange} autoCapitalize="off"/>
          <Input label="phone" name="phone" type="tel" value={this.state.phone}
            onChange={this.handleOnChange}/>
          <Input label="address" name="address_1" value={this.state.address_1}
            onChange={this.handleOnChange}/>
          <Input label name="address_2" value={this.state.address_2}
            onChange={this.handleOnChange}/>
          <Input>
            <Input label="city" name="city" value={this.state.city}
              onChange={this.handleOnChange} autoCapitalize="words"/>
            <Input label="postal code" name="postal" value={this.state.postal}
              onChange={this.handleOnChange}/>
          </Input>
          <Input>
            <Input label="state" name="state" value={this.state.state}
              onChange={this.handleOnChange} autoCapitalize="words"/>
            <Input label="country" name="country" value={this.state.country}
              onChange={this.handleOnChange}/>
          </Input>
          <Toggle label="type" name="type" value={this.state.type}
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
