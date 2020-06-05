import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import * as types from './types'
import { RequiredSign } from '../common/required-indication'

export const TextAreaInput: React.FC<types.TextAreaInputProps> = ({
  value,
  isRequired,
  minLength,
  maxLength,
  className,
  texts,
  attrs,
  onChange,
  valid,
  invalid,
  innerRef
}) => {
  const [errMessage, setErrMessage] = useState('')
  const [targetValue, setTargetValue] = useState(value)

  const handleChange = (val: any) => {
    setTargetValue(val.target.value)
    onChange(val)
  }

  const handleBlur = () => {
    if (isRequired) {
      if (targetValue === '') {
        setErrMessage(texts?.empty || 'Please fill out this field')
        setTargetValue(value)
      } else {
        if (minLength !== undefined && minLength > targetValue.length) {
          setErrMessage(`Must be minimum of ${minLength} characters only`)
        } else if (maxLength !== undefined && maxLength < targetValue.length) {
          setErrMessage(`Must be maximum of ${maxLength} characters only`)
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
    setTargetValue(
      toASCII(
        targetValue
          .replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
          .replace(/[ ]{2,}/gi, ' ') // replaces multiple spaces with one space
          .replace(/\n +/, '\n') // Removes spaces after newlines
      )
    )
  }

  return (
    <React.Fragment>
      <Label>
        {attrs?.title} &nbsp; {targetValue.length}/{maxLength} <RequiredSign />
      </Label>
      <Input
        minLength={minLength}
        maxLength={maxLength}
        type='textarea'
        value={targetValue}
        required={isRequired}
        name={attrs?.name}
        placeholder={attrs?.placeholder}
        style={attrs?.style}
        invalid={errMessage !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        className={
          (valid ? 'is-valid ' : invalid ? 'is-invalid ' : '') + className
        }
        innerRef={innerRef}
      />
      <p className='text-danger'>{errMessage}</p>
    </React.Fragment>
  )
}
