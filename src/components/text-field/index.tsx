import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'

export const TextField: React.FC<types.InputType> = ({
  value,
  required,
  minLength,
  maxLength,
  errors,
  attrs,
  innerRef,
  onChange
}) => {
  const [error, setError] = useState('')
  const [targetValue, setTargetValue] = useState(value)
  const [toBeValidate, setToBeValidate] = useState(targetValue)

  const handleChange = (e: any) => {
    e.preventDefault()
    const setNoWhiteSpace = e.target.value
    setToBeValidate(setNoWhiteSpace.replace(/(^\s*)/gi, ''))
    onChange(e)
  }

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
      }
    } else {
      validateLength()
    }
  }

  const handleBlur = () => {
    validateRequired()
    if (error !== '') {
      setTargetValue(value)
    } else {
      setToBeValidate(
        toBeValidate
          .replace(/(^\s*)|(\s*$)/gi, '')
          .replace(/[ ]{2,}/gi, ' ')
          .replace(/\n +/, '\n')
      )
      setTargetValue(toBeValidate)
    }
  }

  const renderTextCounter = () => (
    <React.Fragment>
      {toBeValidate.length}/{maxLength || 100}
    </React.Fragment>
  )

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
        minLength={minLength || 0}
        maxLength={100}
        innerRef={error === '' ? innerRef : null}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  )
}
