import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'
import { RequiredSign } from '../common/required-indication'

export const TextField: React.FC<types.InputType> = ({
  value,
  innerRef,
  onChange,
  attrs,
  valid,
  invalid,
  required,
  minLength,
  maxLength,
  texts
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
    const fixToBeValidate = toBeValidate
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n')

    if (minLength !== undefined && minLength > fixToBeValidate.length) {
      setError(`Must be minimum of ${minLength} characters only`)
    } else if (maxLength !== undefined && maxLength < fixToBeValidate.length) {
      setError(`Must be maximum of ${maxLength} characters only`)
    } else {
      setError('')
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (toBeValidate === '') {
        setError(texts?.empty || `Please enter ${attrs?.title || ''}`)
        setTargetValue('')
      } else {
        validateLength()
      }
    } else {
      validateLength()
    }
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
      setTargetValue(value)
    } else {
      setToBeValidate(
        toBeValidate
          .replace(/(^\s*)|(\s*$)/gi, '')
          .replace(/[ ]{2,}/gi, ' ')
          .replace(/\n +/, '\n')
      )
      setTargetValue(
        toBeValidate
          .replace(/(^\s*)|(\s*$)/gi, '')
          .replace(/[ ]{2,}/gi, ' ')
          .replace(/\n +/, '\n')
      )
    }
  }

  const renderTextCounter = () => (
    <React.Fragment>
      {toBeValidate.length}/{maxLength || 100}
    </React.Fragment>
  )

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
        minLength={minLength || 0}
        maxLength={100}
        innerRef={innerRef}
        valid={valid}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  )
}
