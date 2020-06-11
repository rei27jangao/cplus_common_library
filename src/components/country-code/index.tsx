import React, { useState } from 'react'
import * as types from './types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from 'reactstrap'
import { ErrorMessage} from '../common/error-message'
import { toHalfWidth } from '../../utils/toHalfWidthConverter'
import { 
  numberExp, 
  numberFullWidthExp, 
  alphaExp, 
  alphaFullWidthExp, 
  alphaNumeric, 
  numberFullAndHalfWidth, 
  aplhaFullAndHalfWidth 
} from '../../utils/regex'

export const CountryInput: React.FC<types.CountryCodeType> = ({
  isRequired,
  innerProps,
  texts,
  value,
  innerRef,
  invalid,
  onChange,
  inputClassName,
  wrapperClassName,
  inputInlineStyle,
  wrapperInlineStyle,
  maxLength,
  minLength
}) => {

  const [textVal, setTextVal] = useState(value)
  const [error, setError] = useState('')
  const minLengthNum = minLength || 2;
  const maxLengthNum = maxLength || 3;

  const onChangeHandler = (value: any) => {
    onChange(value);
    const inputText = value.target.value;
    const check = inputText.replace(alphaNumeric, '');
    checkLength(check)
    checkFormat(check);
    setTextVal(check.toUpperCase())
  }

  const checkLength = (val: any) => {
    if (val.length < minLengthNum) {
      setError(texts.invalid);
      if (val.length === 0) {
        setError(texts.empty)
      } 
    } else if (val.length === 0) {
      setError(texts.empty)
    } else {
      setError('');
    }
  }

  const checkFormat = (val: any) => {
    if (
      !(
        val.match(numberExp) ||
        val.match(numberFullAndHalfWidth) ||
        val.match(alphaExp) ||
        val.match(aplhaFullAndHalfWidth) ||
        val.match(numberFullWidthExp) ||
        val.match(alphaFullWidthExp)
      )
    ) {
      setError(texts.invalid);
    } else {
      val.length >= minLengthNum && setError('');
    }
  }

  const convertToHalfWidth = (chars: any) => {
    const convertedText = toHalfWidth(chars);
    if (
      !(
        convertedText.match(numberExp) ||
        convertedText.match(numberFullAndHalfWidth) ||
        convertedText.match(alphaExp) ||
        convertedText.match(aplhaFullAndHalfWidth) ||
        convertedText.match(numberFullWidthExp) ||
        convertedText.match(alphaFullWidthExp)
      )
    ) {
      setError(texts.invalid);
      setTextVal(convertedText);
    } else {
      setError('');
      checkLength(convertedText);
      setTextVal(convertedText);
    }
  }

  return (
    <React.Fragment>
      <div className={wrapperClassName} style={wrapperInlineStyle}>
        <Input
          {...innerProps}
          type='text'
          value={textVal}
          required={isRequired}
          maxLength={maxLengthNum}
          onChange={(e: any) => onChangeHandler(e)}
          onBlur={() => convertToHalfWidth(textVal)}
          invalid={invalid || error !== ''}
          innerRef={innerRef}
          className={inputClassName}
          style={inputInlineStyle}
          autoComplete="off"
        />
        {error !== "" && <ErrorMessage error={error}/>}
        <p className='text-muted'>ex: JP or JPN or 392</p>
      </div>
    </React.Fragment>
  )
} 
