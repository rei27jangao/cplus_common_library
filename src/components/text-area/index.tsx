import React, { useState, useEffect } from 'react'
import { Input, Label } from 'reactstrap'

export type TextAreaInputProps = {
  name?: any
  value?: any
  required?: boolean
  minLength?: number | 0
  maxLength?: number | 2000
  className: string
  errors?: {
    empty?: string
    invalid?: string
  }
  attrs?: {
    placeholder?: string
    style?: any
  }
}

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

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  name,
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
        {name} &nbsp; {targetValue.length}/{maxLength}
      </Label>
      <Input
        type='textarea'
        value={targetValue}
        required={required}
        style={attrs?.style}
        className={className}
        placeholder={attrs?.placeholder}
        invalid={error !== ''}
        onBlur={handleBlur}
        onChange={(val: any) => handleChange(val)}
        // onKeyDown={handleKeyDown}
      />
      {renderErrorMessage(error)}
    </React.Fragment>
  )
}
