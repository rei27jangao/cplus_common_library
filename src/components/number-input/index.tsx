import React, {useState} from 'react'
import * as types from './types'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input } from 'reactstrap';

export const NumberInput: React.FC<types.InputType> = ({isRequired, isDecimal , attrs}) => {
 
const [textVal, setTextVal] = useState('');

  const [errMessage, setErrMessage] = useState('')

  console.log(setErrMessage)
  const onChange = (value:any) => {
    const convert = removeExtraDot(value)
    setTextVal(convert.toUpperCase());
  }

  const removeExtraDot = (value:string) => {
    return value.replace(/\s{2,}/g, '.');
  }

  const validation = (event:any) => {
    if(isDecimal) {
      if (event.keyCode < 48 || event.keyCode > 57 ) {
        if (event.keyCode !== 8 && event.keyCode !== 110 && event.keyCode !== 190 ) {
          event.preventDefault();	
        }
      }
    } else {
      if (event.keyCode < 48 || event.keyCode > 57 ) {
        if (event.keyCode !== 8) {
          event.preventDefault();	
        }
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
        minLength={attrs.min}
        maxLength={attrs.max}
        onChange={(e:any) => onChange(e.target.value)}
        onKeyDown={validation}
        invalid={errMessage !== ''}
      />
    </React.Fragment>
  )
}
