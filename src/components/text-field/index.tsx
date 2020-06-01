import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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

export const TextField: React.FC<types.InputType> = ({
  value,
  required,
  minLength,
  maxLength,
  className,
  errors,
  attrs
}) => {
  const [error, setError] = useState('')
  useEffect(() => {}, [error])
  const [targetValue, setTargetValue] = useState(value)

  const handleChange = (val: any) => {
    val.preventDefault()
    setTargetValue(val.target.value)
  }

  const handleBlur = () => {
    if (required === true) {
      if (targetValue === '') {
        setError(errors?.empty || 'Please fill out this field')
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
    setTargetValue(
      targetValue
        .replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
        .replace(/[ ]{2,}/gi, ' ') // replaces multiple spaces with one space
        .replace(/\n +/, '\n') // Removes spaces after newlines
    )
  }

  return (
    <React.Fragment>
      <Input
        value={targetValue}
        required={required}
        style={attrs?.style}
        className={className}
        placeholder={attrs?.placeholder}
        invalid={error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
      />
      {renderErrorMessage(error)}
      <button
        onClick={() => {
          console.log(targetValue)
        }}
      >
        Check
      </button>
    </React.Fragment>
  )
}
