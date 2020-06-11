import React, { useState } from 'react'
import * as types from './types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from 'reactstrap'
import { ErrorMessage } from '../common/error-message'
import { toHalfWidth } from '../../utils/toHalfWidthConverter'
import { numberFullAndHalfWidth } from '../../utils/regex'

export const NumberInput: React.FC<types.InputNumberType> = ({
  isRequired,
  isDecimal,
  innerProps,
  texts,
  value,
  onChange,
  decimalPlace,
  inputClassName,
  inputInlineStyle,
  invalid,
  innerRef,
  min,
  max
}) => {
  const [textVal, setTextVal] = useState(value)
  const [errMessage, setErrMessage] = useState('')
  const decimalCount = decimalPlace ? decimalPlace + 1 : decimalPlace || 3;

  const onChangeHandler = (value: any) => {
    onChange(value);
    const num = value.target.value;
    if (isDecimal) {
      const check = num.replace(/[^0-9０-９\..]/g, '');
      if (num.charAt(0) === '.') {
        setTextVal(num.slice(1))
      } else {
        setTextVal(check)
      }
      const pos = num.indexOf('.') + 1
      if (pos > 1) {
        const decimal = num.indexOf('.') + decimalCount;
        const num1 = num.substr(0, pos) + num.slice(pos).replace('.', '')
        setTextVal(num1.substr(0, decimal));
        checkValue(num1.substr(0, decimal));
      }
    } else {
      const check = num.replace(numberFullAndHalfWidth, '')
      checkValue(check);
      setTextVal(check);
    }
  }

  const checkValue = (num: any) => {
    if (num.length !== 0) {
      setErrMessage('')
      if (num > max || num < min) {
        setErrMessage(texts.invalid);
      } else {
        setErrMessage('');
      }
    } else {
      setErrMessage(texts.empty)
    }
  }

  const sliceLast = (value:any) => {
    if (value.charAt(value.length - 1) === '.') {
      setTextVal(value.slice(0, -1));
    }
  }

  const convertToHalfWidth = (chars: any) => {
    const convertedText = toHalfWidth(chars);
    const num = parseInt(convertedText);
    if (num > max || num < min) {
      setErrMessage(texts.invalid);
      checkValue(convertedText);
      sliceLast(convertedText);
    } else {
      sliceLast(convertedText);
      setErrMessage('');
      checkValue(convertedText);
    }
  }

  return (
    <React.Fragment>
      <Input
        {...innerProps}
        type="text"
        value={textVal}
        required={isRequired}
        onChange={(value: any) => onChangeHandler(value)}
        onBlur={() => convertToHalfWidth(textVal)}
        invalid={invalid || errMessage !== ''}
        className={inputClassName}
        innerRef={innerRef}
        style={inputInlineStyle}
      />
      {errMessage !== "" && <ErrorMessage error={errMessage}/>}
    </React.Fragment>
  )
}
