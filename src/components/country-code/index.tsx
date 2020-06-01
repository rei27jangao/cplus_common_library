import React, {useState} from 'react'
import * as types from './types'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input } from 'reactstrap';

export const CountryInput: React.FC<types.InputType> = ({isRequired, attrs}) => {
 
const [textVal, setTextVal] = useState('');

  // const [errMessage, setErrMessage] = useState('')

  const onChange = (value:any) => {
    setTextVal(value.toUpperCase());
  }

  const validation = (event:any) => {
    if (event.keyCode < 48 || event.keyCode > 57 ) {
      if (event.keyCode !== 8) {
        event.preventDefault();	
      }
    }
  }

  return (
    <React.Fragment>
      <Label>{attrs.title} <span className="text-danger">*</span></Label>
      <Input 
        type="text"
        value={textVal}
        required={isRequired}
        name={attrs.name}
        placeholder={attrs.placeholder}
        style={attrs.style}
        minLength={2}
        maxLength={3}
        onChange={(e:any) => onChange(e.target.value)}
        onKeyDown={validation}
      />
      <p className="text-muted">ex: JP or JPN or 392</p>
    </React.Fragment>
  )
}
