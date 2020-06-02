/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'

export const EmailInput: React.FC<types.EmailType> = ({
  value,
  required,
  minLength,
  maxLength,
  attrs,
  errors,
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
    if (minLength !== undefined && minLength > toBeValidate.length) {
      setError(`Must be minimum of ${minLength} characters only`)
    } else if (maxLength !== undefined && maxLength < toBeValidate.length) {
      setError(`Must be maximum of ${maxLength} characters only`)
    } else {
      setError('')
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (toBeValidate === '') {
        setError(errors?.empty || `Please enter ${attrs?.title}`)
        setTargetValue('')
      } else {
        validateLength()
        validateEmail()
      }
    } else {
      validateLength()
      validateEmail()
    }
  }

  const validateEmail = () => {
    // eslint-disable-next-line no-control-regex
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    const isValid = expression.test(String(toBeValidate).toLowerCase())
    if (!isValid) {
      setError(`${errors?.invalid || 'Invalid format'}`)
      setTargetValue(value)
    } else {
      setError('')
    }
  }

  // const validate = () => {
  //   const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
  //   const isValid = expression.test(String(targetValue).toLowerCase())
  //   if (required === true) {
  //     if (targetValue === '') {
  //       setError(errors?.empty || `Please enter ${attrs?.title}`)
  //       setTargetValue(value)
  //     } else {
  //       if (minLength !== undefined && minLength > targetValue.length) {
  //         setError(`Must be minimum of ${minLength} characters only`)
  //         setTargetValue(value)
  //       } else if (maxLength !== undefined && maxLength < targetValue.length) {
  //         setError(`Must be maximum of ${maxLength} characters only`)
  //         setTargetValue(value)
  //       } else if (!isValid) {
  //         setError(`${errors?.invalid || 'Invalid format'}`)
  //         setTargetValue(value)
  //       } else {
  //         setError('')
  //       }
  //     }
  //   } else {
  //     setError('')
  //   }
  // }

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

  const handleBlur = () => {
    toBeValidate
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')
    targetValue
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')

    validateRequired()
    if (error !== '') {
      setTargetValue(toASCII(value))
      setToBeValidate(toASCII(toBeValidate))
    } else {
      setToBeValidate(toASCII(toBeValidate))
      setTargetValue(toASCII(targetValue))
    }
    // validateRequired()
  }

  const handleChange = (e: any) => {
    e.preventDefault()
    const setNoWhiteSpace = e.target.value
    setToBeValidate(setNoWhiteSpace.replace(/(^\s*)/gi, ''))
    onChange(e)
  }

  return (
    <React.Fragment>
      {required && <span>*</span>}
      <Label>
        {attrs?.title}: {renderTextCounter()}
      </Label>
      <Input
        type='text'
        value={toBeValidate}
        required={required}
        style={attrs?.style}
        className={attrs?.className}
        placeholder={attrs?.placeholder || `Enter ${attrs?.title}`}
        invalid={error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        minLength={minLength || 5}
        maxLength={320}
        innerRef={innerRef}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  )
}
