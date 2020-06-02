import React, {useState} from 'react'
import * as types from './types'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input } from 'reactstrap';

export const NumberInput: React.FC<types.InputType> = ({isRequired, isDecimal, attrs, texts}) => {
 
const [textVal, setTextVal] = useState('');

  const [errMessage, setErrMessage] = useState('');

  const onChange = (value:any) => {
    checkValue(value);
    const num = value.target.value;
    if(isDecimal) {
      const check = num.replace(/[^0-9０-９\..]/g, '');
      checkValue(check);
      if(num.charAt(0) === ".") {
        setTextVal(num.slice(1));
      } else {
        setTextVal(check);
      }
      const pos = num.indexOf(".") + 1;
      if(pos > 1) {
        const twoDecimal = num.indexOf(".") + 3;
        const num1 = num.substr(0, pos) + num.slice(pos).replace(".", "");
        setTextVal(num1.substr(0, twoDecimal));
      }
    } else {
      const check = num.replace(/[^0-9０-９]/g, '');
      checkValue(check);
      setTextVal(check);
    }
  }

  const checkValue = (num:any) => {
    if (num.length !== 0) {
      setErrMessage('');
      if(num > attrs.max || num < attrs.min) {
        setErrMessage(texts.invalid);
      }
    } else {
      setErrMessage(texts.empty);
    }
  }

  const toASCII = (chars: any) => {
    var ascii = ''
    for (var i = 0, l = chars.length; i < l; i++) {
      var c = chars[i].charCodeAt(0)
      if (c >= 0xff00 && c <= 0xffef) {
        c = 0xff & (c + 0x20)
      }
      ascii += String.fromCharCode(c)
    }
    const num = parseInt(ascii);
    if(num > attrs.max || num < attrs.min) {
      setTextVal('');
      setErrMessage(texts.invalid);
    } else {
      setTextVal(ascii);
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
        onChange={(value:any) => onChange(value)}
        onBlur={() => toASCII(textVal)}
        invalid={errMessage !== ''}
      />
      <p className="text-danger">{errMessage}</p>
    </React.Fragment>
  )
}
