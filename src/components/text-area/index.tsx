import React, { useState, useEffect } from 'react'
import { Input, Label } from 'reactstrap'
import * as types from './types'

export const renderErrorMessage = (error: string) => {
  if (error !== '')
    return (
      <p
        style={{
          color: 'red'
        }}
      >
        {error}
      </p>
    )
  return ''
}

export const TextAreaInput: React.FC<types.TextAreaInputProps> = ({
  value,
  isRequired,
  minLength,
  maxLength,
  className,
  texts,
  attrs,
  onChange
}) => {
  const [error, setError] = useState('')
  useEffect(() => {}, [error])
  const [targetValue, setTargetValue] = useState(value)

  const handleChange = (val: any) => {
    setTargetValue(val.target.value)
    onChange(val)
  }

  const handleBlur = () => {
    if (isRequired) {
      if (targetValue === '') {
        setError(texts?.empty || 'Please fill out this field')
        setTargetValue(value)
      } else {
        if (minLength !== undefined && minLength > targetValue.length) {
          setError(`Must be minimum of ${minLength} characters only`)
        } else if (maxLength !== undefined && maxLength < targetValue.length) {
          setError(`Must be maximum of ${maxLength} characters only`)
        } else {
          setError('')
        }
      }
    } else {
      setError('')
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
        {attrs?.title} &nbsp; {targetValue.length}/{maxLength}
      </Label>
      <Input
        minLength={minLength}
        maxLength={maxLength}
        type='textarea'
        value={targetValue}
        isRequired={isRequired}
        name={attrs?.name}
        placeholder={attrs?.placeholder}
        style={attrs?.style}
        className={className}
        invalid={error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
      />
      {renderErrorMessage(error)}
    </React.Fragment>
  )
}
