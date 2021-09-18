import React from 'react'
// import ratingMeansings from './ratingMeanings.js';

class CharacteristicRadioFormField extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    let fieldName = `characteristics.${this.props.characteristic}`;
    return (
    <>
      <div onChange={this.props.handleRadioFormChange} className='characteristic-form-field'>
        <h4 className='form-sub-head'>{this.props.characteristic}</h4>

      <label htmlFor="1" className='characteristic-form-label'>1</label>
      <input type="radio" id="1" name={fieldName} className='form-radio-button'/>

      <label htmlFor="2" className='characteristic-form-label'>2</label>
      <input type="radio" id="2" name={fieldName} className='form-radio-button'/>

      <label htmlFor="3" className='characteristic-form-label'>3</label>
      <input type="radio" id="3" name={fieldName} className='form-radio-button'/>

      <label htmlFor="4" className='characteristic-form-label'>4</label>
      <input type="radio" id="4" name={fieldName} className='form-radio-button'/>

      <label htmlFor="5" className='characteristic-form-label'>5</label>
      <input type="radio" id="5" name={fieldName} className='form-radio-button'/>

      </div>

    </>
    )
  }
}

export default CharacteristicRadioFormField;



/*

//Green

import React from 'react'
import ratingMeansings from './ratingMeanings.js';

class CharacteristicRadioFormField extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    let fieldName = `characteristics.${this.props.characteristic}`;
    return (
    <>
      <div onChange={this.handleRadioFormChange} className='characteristic-form-field'>
        <h4 className='form-sub-head'>{this.props.characteristic}</h4>
      </div>
      <label htmlFor="1" className='characteristic-form-label'>1</label>
      <input type="radio" id="1" name={fieldName} className='form-radio-button'/>

      <label htmlFor="2" className='characteristic-form-label'>2</label>
      <input type="radio" id="2" name={fieldName} className='form-radio-button'/>

      <label htmlFor="3" className='characteristic-form-label'>3</label>
      <input type="radio" id="3" name={fieldName} className='form-radio-button'/>

      <label htmlFor="4" className='characteristic-form-label'>4</label>
      <input type="radio" id="4" name={fieldName} className='form-radio-button'/>

      <label htmlFor="5" className='characteristic-form-label'>5</label>
      <input type="radio" id="5" name={fieldName} className='form-radio-button'/>

    </>
    )
  }
}

export default CharacteristicRadioFormField;


//red - trying this first

import React from 'react'
// import ratingMeansings from './ratingMeanings.js';

class CharacteristicRadioFormField extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    let fieldName = `characteristics.${this.props.characteristic}`;
    return (
    <>
      <div onChange={this.props.handleRadioFormChange} className='characteristic-form-field'>
        <h4 className='form-sub-head'>{this.props.characteristic}</h4>

      <label htmlFor="1" className='characteristic-form-label'>1</label>
      <input type="radio" id="1" name={fieldName} className='form-radio-button'/>

      <label htmlFor="2" className='characteristic-form-label'>2</label>
      <input type="radio" id="2" name={fieldName} className='form-radio-button'/>

      <label htmlFor="3" className='characteristic-form-label'>3</label>
      <input type="radio" id="3" name={fieldName} className='form-radio-button'/>

      <label htmlFor="4" className='characteristic-form-label'>4</label>
      <input type="radio" id="4" name={fieldName} className='form-radio-button'/>

      <label htmlFor="5" className='characteristic-form-label'>5</label>
      <input type="radio" id="5" name={fieldName} className='form-radio-button'/>

      </div>

    </>
    )
  }
}

export default CharacteristicRadioFormField;

*/