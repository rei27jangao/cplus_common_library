import React, { useState } from 'react'
import * as types from './types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input } from 'reactstrap'
import { RequiredSign } from '../common/required-indication'

export const CountryInput: React.FC<types.InputType> = ({
  isRequired,
  attrs,
  texts,
  value,
  innerRef,
  className,
  valid,
  invalid,
  onChange
}) => {
  const [textVal, setTextVal] = useState(value)

  const [errMessage, setErrMessage] = useState('')

  const onChangeHandler = (value: any) => {
    onChange();
    const check = value.replace(/[^a-zA-Z0-9０-９Ａ-ｚ]/g, '')
    checkLength(check)
    checkFormat(check)
    setTextVal(check.toUpperCase())
  }

  const checkLength = (val: any) => {
    if (val.length == 1) {
      setErrMessage(texts.invalid)
    } else if (val.length === 0) {
      setErrMessage(texts.empty)
    } else {
      setErrMessage('')
    }
  }

  const checkFormat = (val: any) => {
    const numberExp = /^[0-9]*$/
    const numberFullExp = /^[０-９]*$/
    const alphaExp = /^[A-Za-z]+$/
    const alphaFullExp = /^[Ａ-ｚ]+$/
    if (
      !(
        val.match(numberExp) ||
        val.match(alphaExp) ||
        val.match(numberFullExp) ||
        val.match(alphaFullExp)
      )
    ) {
      setErrMessage(texts.invalid)
    } else {
      setErrMessage('');
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
    const numberExp = /^[0-9]*$/
    const numberFullExp = /^[０-９]*$/
    const alphaExp = /^[A-Za-z]+$/
    const alphaFullExp = /^[Ａ-ｚ]+$/
    if (
      !(
        ascii.match(numberExp) ||
        ascii.match(alphaExp) ||
        ascii.match(numberFullExp) ||
        ascii.match(alphaFullExp)
      )
    ) {
      setTextVal('')
      setErrMessage(texts.invalid);
      checkLength(ascii);
    } else {
      setErrMessage('');
      setTextVal(ascii);
      checkLength(ascii);
    }
  }

  return (
    <React.Fragment>
      <Label>
        {attrs.title} { isRequired && <RequiredSign />}
      </Label>
      <Input
        type='text'
        value={textVal}
        required={isRequired}
        name={attrs.name}
        placeholder={attrs.placeholder}
        style={attrs.style}
        minLength={2}
        maxLength={3}
        onChange={(e: any) => onChangeHandler(e.target.value)}
        onBlur={() => toASCII(textVal)}
        invalid={errMessage !== ''}
        innerRef={innerRef}
        className={(valid ? "is-valid " : invalid ? "is-invalid " : "") + className}
      />
      <p className='text-danger'>{errMessage}</p>
      <p className='text-muted'>ex: JP or JPN or 392</p>
    </React.Fragment>
  )
}
