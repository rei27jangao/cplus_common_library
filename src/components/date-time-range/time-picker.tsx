import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ErrorMessage } from '../common/error-message'
import 'react-datepicker/dist/react-datepicker.css'
import * as types from './types'

export const TimePicker: React.FC<types.TimePickerProps> = ({
  required,
  attrs,
  timeFormat,
  value,
  innerRef,
  onChange,
  onSelect,
  customInput,
  errors,
  inputType
}) => {
  const [startTime, setStartTime] = useState(value)
  const [error, setError] = useState('')

  const validateTime = () => {
    if (startTime === null) {
      setError(errors?.invalid || `Invalid Format`)
      setStartTime(startTime)
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
        setError(errors?.invalid || `Invalid Format`)
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
        setError(errors?.invalid || `Invalid Format`)
      } else {
        setError('')
      }
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (startTime === '') {
        setError(errors?.empty || `Please enter a valid ${attrs?.title}`)
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

  const DisabledInput = ({ value, onClick, onSelect }: any) => (
    <input
      onClick={onClick}
      value={value}
      onChange={() => {}}
      onBlur={handleBlur}
      onSelect={onSelect || handleBlur}
      placeholder={attrs?.placeholder}
      className={
        error !== ''
          ? `border border-danger form-control ${attrs?.className}`
          : `${attrs?.className} form-control`
      }
    />
  )

  if (inputType === 'input')
    return (
      <React.Fragment>
        {required && <span>*</span>}
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
            customInputRef={innerRef}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
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
            customInputRef={innerRef}
            onBlur={handleBlur}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            required={required}
          />
        )}
        <p
          style={{
            marginBottom: '1px',
            fontSize: '11px'
          }}
        >
          {timeFormat === 'hh:mm' ? 'Format: HH:MM' : 'Format: HH:MM:SS'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  else {
    return (
      <React.Fragment>
        {required && <span>*</span>}
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
            customInput={<DisabledInput />}
            customInputRef={innerRef}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            isClearable
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
            customInput={<DisabledInput />}
            customInputRef={innerRef}
            onBlur={handleBlur}
            onSelect={onSelect}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            isClearable
            required={required}
          />
        )}
        <p
          style={{
            marginBottom: '1px',
            fontSize: '11px'
          }}
        >
          {timeFormat === 'hh:mm' ? 'Format: HH:MM' : 'Format: HH:MM:SS'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}
