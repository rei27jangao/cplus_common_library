/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'
import { RequiredSign } from '../common/required-indication'

export const EmailInput: React.FC<types.EmailType> = ({
  value,
  valid,
  invalid,
  required,
  minLength,
  maxLength,
  attrs,
  texts,
  innerRef,
  onChange
}) => {
  const [error, setError] = useState('')
  const [targetValue, setTargetValue] = useState(value)
  const [toBeValidate, setToBeValidate] = useState(targetValue)

  const renderTextCounter = () => (
    <React.Fragment>
      {toBeValidate.length}/{maxLength || 320}
    </React.Fragment>
  )

  const validateLength = () => {
    const fixToBeValidate = toBeValidate
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')

    if (minLength !== undefined && minLength > fixToBeValidate.length) {
      setError(`Must be minimum of ${minLength} characters only`)
    } else if (maxLength !== undefined && maxLength < fixToBeValidate.length) {
      setError(`Must be maximum of ${maxLength} characters only`)
    } else {
      validateEmail()
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (toBeValidate === '') {
        setError(texts?.empty || `Please enter ${attrs?.title}`)
        setTargetValue('')
      } else {
        validateLength()
      }
    } else {
      validateLength()
    }
  }

  const validateEmail = () => {
    const fixedEmail = toASCII(
      toBeValidate
        .replace(/(^\s*)|(\s*$)/gi, '')
        .replace(/[ ]{2,}/gi, ' ')
        .replace(/\n +/, '\n')
    )
    // eslint-disable-next-line no-control-regex
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0]|[a-z\d\u00A0][a-z\d\-._~\u00A0]*[a-z\d\u00A0])\.)+([a-z\u00A0]|[a-z\u00A0][a-z\d\-._~\u00A0]*[a-z\u00A0])\.?$/i
    const isValid = expression.test(String(fixedEmail).toLowerCase())
    if (!isValid) {
      setError(`${texts?.invalid || 'Invalid format'}`)
      setTargetValue(value)
    } else {
      setError('')
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
    return ascii
  }

  const removeSpaces = () => {
    const fixTargetValue = value
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')
    const fixToBeValidate = toBeValidate
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')
    setToBeValidate(fixToBeValidate)
    setTargetValue(fixTargetValue)
  }

  const handleBlur = () => {
    validateRequired()
    if (error !== '') {
      removeSpaces()
      setTargetValue(
        toASCII(
          value
            .replace(/(^\s*)|(\s*$)/gi, '')
            .replace(/[ ]{2,}/gi, ' ')
            .replace(/\n +/, '\n')
        )
      )
      setToBeValidate(
        toASCII(
          toBeValidate
            .replace(/(^\s*)|(\s*$)/gi, '')
            .replace(/[ ]{2,}/gi, ' ')
            .replace(/\n +/, '\n')
        )
      )
    } else {
      setToBeValidate(
        toASCII(
          toBeValidate
            .replace(/(^\s*)|(\s*$)/gi, '')
            .replace(/[ ]{2,}/gi, ' ')
            .replace(/\n +/, '\n')
        )
      )
      setTargetValue(
        toASCII(
          targetValue
            .replace(/(^\s*)|(\s*$)/gi, '')
            .replace(/[ ]{2,}/gi, ' ')
            .replace(/\n +/, '\n')
        )
      )
    }
  }

  const handleChange = (e: any) => {
    e.preventDefault()
    const setNoWhiteSpace = e.target.value
    setToBeValidate(setNoWhiteSpace.replace(/(^\s*)/gi, ''))
    onChange(e)
  }

  return (
    <React.Fragment>
      {required && <RequiredSign />}
      <Label>
        {attrs?.title}: {renderTextCounter()}
      </Label>
      <Input
        type='text'
        value={toBeValidate}
        required={required}
        style={attrs?.style}
        className={attrs?.className}
        placeholder={attrs?.placeHolder || `Enter ${attrs?.title || ''}`}
        invalid={invalid || error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        minLength={minLength || 5}
        maxLength={320}
        innerRef={innerRef}
        valid={valid}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  )
}
