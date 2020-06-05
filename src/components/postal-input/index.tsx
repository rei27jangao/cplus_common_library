import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import * as types from './types'
import { RequiredSign } from '../common/required-indication'

export const PostalInput: React.FC<types.PostalInputProps> = ({
  value,
  isRequired,
  className,
  onChange,
  texts,
  attrs,
  minLength = 3,
  maxLength = 10,
  innerRef
}) => {
  const [errMessage, setErrMessage] = useState('')
  const [targetValue, setTargetValue] = useState(value)

  const handleChange = (val: any) => {
    setTargetValue(val.target.value)
    onChange(val)
  }

  const handleBlur = () => {
    // eslint-disable-next-line no-useless-escape
    const singleHypenSpace = /^(?=.{1,10}$)([a-zA-Z0-9]+\s{0,1}[a-zA-Z0-9]*\-{0,1}[a-zA-Z0-9]+)$/
    const latinChar = /^[A-Za-z]+$/
    const alphaFullExp = /^[Ａ-ｚ]+$/

    if (isRequired) {
      if (targetValue === '') {
        setErrMessage(texts?.empty || 'Please fill out this field')
        setTargetValue(value)
      } else if (
        !(
          targetValue.match(singleHypenSpace) ||
          targetValue.match(latinChar) ||
          targetValue.match(alphaFullExp)
        )
      ) {
        setErrMessage(texts?.invalid)
      } else {
        if (minLength !== undefined && minLength > targetValue.length) {
          setErrMessage(`Must be minimum of ${minLength} characters only`)
        } else {
          setErrMessage('')
        }
      }
    } else {
      setErrMessage('')
    }
    // function to convert full-width to half-width
    const toASCII = (chars: any) => {
      var ascii = ''
      for (var i = 0, l = chars.length; i < l; i++) {
        var c = chars[i].charCodeAt(0)

        // make sure we only convert half-full width char
        if (c >= 0xff00 && c <= 0xffef) {
          c = 0xff & (c + 0x20)
        }

        ascii += String.fromCharCode(c)
      }

      return ascii
    }
    setTargetValue(toASCII(targetValue))
  }

  return (
    <React.Fragment>
      <Label>
        {attrs?.title} {isRequired && <RequiredSign />}
      </Label>
      <Input
        value={targetValue}
        required={isRequired}
        style={attrs?.style}
        className={className}
        placeholder={attrs?.placeholder}
        invalid={errMessage !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        minLength={minLength}
        maxLength={maxLength}
        innerRef={innerRef}
      />
      <p className='text-danger'>{errMessage}</p>
    </React.Fragment>
  )
}
