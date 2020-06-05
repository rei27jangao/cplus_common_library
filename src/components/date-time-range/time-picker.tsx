import React, { useState } from 'react'
import { Label } from 'reactstrap'
import DatePicker from 'react-datepicker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'
import { RequiredSign } from '../common/required-indication'

export const TimePicker: React.FC<types.TimePickerProps> = ({
  required,
  attrs,
  timeFormat,
  value,
  customInput,
  texts,
  inputType,
  onChange,
  onSelect,
  innerRef
}) => {
  const [startTime, setStartTime] = useState(value)
  const [error, setError] = useState('')

  const validateTime = () => {
    if (startTime === null) {
      setError(texts?.invalid || `Invalid Format`)
    } else if (startTime === '') {
      setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
    } else {
      setError('')
    }
  }

  const handleRawChange = (e: any) => {
    const checkChar = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    const checkTime = checkChar.test(e)
    if (timeFormat === 'hh:mm') {
      if (e.length > 5) {
        setError(`Must be maximum of 5 characters`)
        setStartTime(null)
      } else if (e.length < 0) {
        setError(`Must be minimum of 0 characters`)
        setStartTime(null)
      } else if (!checkTime) {
        setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      } else {
        setError('')
      }
    } else {
      if (e.length > 8) {
        setError(`Must be maximum of 8 characters`)
        setStartTime(null)
      } else if (e.length < 0) {
        setError(`Must be minimum of 0 characters`)
        setStartTime(null)
      } else if (!checkTime) {
        setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      } else {
        setError('')
      }
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (startTime === '') {
        setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      } else {
        validateTime()
      }
    } else {
      validateTime()
    }
  }

  const handleChange = (val: any) => {
    setStartTime(val)
    onChange(val)
  }

  const handleBlur = () => {
    validateRequired()
  }

  const DisabledInput = React.forwardRef(
    ({ value, onClick, onSelect }: any, ref: any) => (
      <input
        ref={ref}
        onClick={onClick}
        value={value}
        onChange={validateRequired}
        onBlur={handleBlur}
        onSelect={validateRequired && onSelect}
        placeholder={attrs?.placeholder}
        className={
          error !== ''
            ? `border border-danger form-control ${attrs?.className}`
            : `${attrs?.className} form-control`
        }
        required={required}
      />
    )
  )

  if (inputType === 'input')
    return (
      <React.Fragment>
        {required && <RequiredSign />}
        <Label>{attrs?.title}</Label>
        <br />
        {timeFormat === 'hh:mm' ? (
          <DatePicker
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption='Time'
            dateFormat='HH:mm'
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            customInput={customInput}
            onSelect={onSelect && validateRequired}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            ref={innerRef}
            required={required}
          />
        ) : (
          <DatePicker
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption='Time'
            dateFormat='HH:mm:ss'
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            customInput={customInput}
            onBlur={handleBlur}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            ref={innerRef}
            required={required}
          />
        )}
        <p
          style={{
            marginBottom: '2px',
            fontSize: '11px'
          }}
        >
          {timeFormat === 'hh:mm' ? 'HH:MM' : 'HH:MM:SS'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  else {
    return (
      <React.Fragment>
        {required && <RequiredSign />}
        <Label>{attrs?.title}</Label>
        <br />
        {timeFormat === 'hh:mm' ? (
          <DatePicker
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            timeCaption='Time'
            dateFormat='HH:mm'
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            customInput={customInput || <DisabledInput />}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            isClearable
            required={required}
            ref={innerRef}
          />
        ) : (
          <DatePicker
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption='Time'
            dateFormat='HH:mm:ss'
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            customInput={customInput || <DisabledInput />}
            onBlur={handleBlur}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            isClearable
            required={required}
            ref={innerRef}
          />
        )}
        <p
          style={{
            marginBottom: '1px',
            fontSize: '11px'
          }}
        >
          {timeFormat === 'hh:mm' ? 'HH:MM' : 'HH:MM:SS'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}
