import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'


import Input from '../fields/input'
import MonthYearPicker from '../fields/monthYearPicker'
import Select from '../fields/select';
import Dimensions from '../fields/dimensions';
import Toggle from '../fields/toggle';

export default class NewWorkForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(data, loc){
    this.props.onChange(data,loc)
  }

  render(){
    let work = this.props.work || {dimensions: {}}
    return (
      <form>
        <Input label="title" name="title" value={work.title} placeholder="Artwork's Title" onChange={this.handleOnChange}/>
        <MonthYearPicker label="creation date" value={work.creation_date} name="date" onChange={this.handleOnChange}/>
        <Select label="artist" name="artist" value={work.artist} placeholder="Artist" onChange={this.handleOnChange}
          options={["Martin", "Rune", "Alex"]}/>
        <Select label="medium" name="medium" value={work.medium} placeholder="Oil, Metal,..." onChange={this.handleOnChange}
          creatable
          options={["Oil", "Metal", "Digital"]}/>
        <Dimensions label="dimensions" value={work.dimensions} name="dimensions" onChange={this.handleOnChange} />
        <Input label="" name="dimensions_words" value={work.dimensions_words} placeholder="Or describe it in words" onChange={this.handleOnChange}/>

        <Toggle name="editioned" label="editioned" value={work.editioned} options={[true, false]} onChange={this.handleOnChange} />
      </form>
    );
  }
}


NewWorkForm.propTypes = {
  work: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}