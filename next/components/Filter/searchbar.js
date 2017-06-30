import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Searchbar extends Component {

  render() {
  
    return (
      <div  className="Searchbar">
        <input placeholder="Search"/>
      </div>
    )
  }
}

Searchbar.propTypes = {
}
export default Searchbar