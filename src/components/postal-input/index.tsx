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

export const PostalInput: React.FC<types.PostalInputProps> = ({
  value,
  isRequired,
  className,
  onChange,
  texts,
  attrs,
  minLength = 3,
  maxLength = 10
}) => {
  const [error, setError] = useState('')
  useEffect(() => {}, [error])
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
        setError(texts?.empty || 'Please fill out this field')
        setTargetValue(value)
      } else if (
        !(
          targetValue.match(singleHypenSpace) ||
          targetValue.match(latinChar) ||
          targetValue.match(alphaFullExp)
        )
      ) {
        setError('Invalid postal/zip code format.')
      } else {
        if (minLength !== undefined && minLength > targetValue.length) {
          setError(`Must be minimum of ${minLength} characters only`)
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
    setTargetValue(toASCII(targetValue))
  }

  return (
    <React.Fragment>
      <Label>{attrs?.title}</Label>
      <Input
        value={targetValue}
        isRequired={isRequired}
        style={attrs?.style}
        className={className}
        placeholder={attrs?.placeholder}
        invalid={error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        minLength={minLength}
        maxLength={maxLength}
        // onKeyDown={handleKeyDown}
      />
      {renderErrorMessage(error)}
    </React.Fragment>
  )
}
