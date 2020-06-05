import React, { useState } from 'react'
import { Label } from 'reactstrap'
import ReactDatePicker from 'react-datepicker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'
import { RequiredSign } from '../common/required-indication'

export const DatePicker: React.FC<types.DatePickerProps> = ({
  value,
  dateFormat,
  onChange,
  onSelect,
  inputType,
  customInput,
  required,
  attrs,
  texts
}) => {
  const [startDate, setStartDate] = useState(value || new Date())
  const [error, setError] = useState('')

  const handleChange = (val: any) => {
    setStartDate(val)
    onChange(val)
  }

  const validateDate = () => {
    if (startDate === null) {
      setError(texts?.invalid || `Invalid Format`)
    } else {
      setError('')
    }
  }

  const validateRequired = () => {
    if (required === true) {
      if (startDate === '') {
        setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      } else {
        validateDate()
      }
    } else {
      validateDate()
    }
  }

  const handleBlur = () => {
    validateRequired()
  }

  const validateDDMMYY = (e: any) => {
    const checkDateSlashes = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    // eslint-disable-next-line no-useless-escape
    const checkDateDashes = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/
    const checkTime = checkDateSlashes.test(e) || checkDateDashes.test(e)

    if (e.length > 10) {
      setError(`Must be maximum of 10 characters`)
      setStartDate(null)
    } else if (e.length < 0) {
      setError(`Must be minimum of 0 characters`)
      setStartDate(null)
    } else if (!checkTime) {
      setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      setStartDate(null)
    } else {
      setError('')
    }
  }

  const validateMMDDYY = (e: any) => {
    const checkDateSlashes = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/
    const checkDateDashes = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
    const checkTime = checkDateSlashes.test(e) || checkDateDashes.test(e)

    if (e.length > 10) {
      setError(`Must be maximum of 10 characters`)
      setStartDate(null)
    } else if (e.length < 0) {
      setError(`Must be minimum of 0 characters`)
      setStartDate(null)
    } else if (!checkTime) {
      setError(texts?.empty || `Please enter a valid ${attrs?.title}`)
      setStartDate(null)
    } else {
      setError('')
    }
  }

  const handleRawChange = (e: any) => {
    if (dateFormat === 'MM-DD-YYYY' || dateFormat === 'MM/DD/YYYY') {
      validateMMDDYY(e)
    } else {
      validateDDMMYY(e)
    }
  }

  const DisabledInput = React.forwardRef(
    ({ value, onClick, onSelect }: any, ref: any) => (
      <input
        required={required}
        ref={ref}
        onClick={onClick}
        value={value}
        onChange={() => {}}
        onBlur={handleBlur}
        onSelect={onSelect && validateRequired}
        placeholder={attrs?.placeholder}
        className={
          error !== ''
            ? `border border-danger form-control ${attrs?.className}`
            : `${attrs?.className} form-control`
        }
      />
    )
  )
  if (inputType === 'input') {
    return (
      <React.Fragment>
        {required && <RequiredSign />}
        <Label>{attrs?.title}</Label>
        <br />
        {dateFormat === 'DD-MM-YYYY' || dateFormat === 'DD/MM/YYYY' ? (
          <ReactDatePicker
            selected={startDate}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            onSelect={onSelect || validateRequired}
            dateFormat='dd-MM-yyyy'
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            required={required}
            customInput={customInput}
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            isClearable
            adjustDateOnChange
          />
        ) : (
          <ReactDatePicker
            selected={startDate}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            onSelect={onSelect || validateRequired}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            required={required}
            customInput={customInput}
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            isClearable
            adjustDateOnChange
          />
        )}
        <p
          style={{
            marginBottom: '1px',
            fontSize: '11px'
          }}
        >
          {dateFormat === 'DD-MM-YYYY' || dateFormat === 'DD/MM/YYYY'
            ? 'DD-MM-YYYY or DD/MM/YYYY'
            : 'MM-DD-YYYY or MM/DD/YYYY'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        {required && <RequiredSign />}
        <Label>{attrs?.title}</Label>
        <br />
        {dateFormat === 'DD-MM-YYYY' || dateFormat === 'DD/MM/YYYY' ? (
          <ReactDatePicker
            selected={startDate}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            onSelect={onSelect || validateRequired}
            dateFormat='dd-MM-yyyy'
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            required={required}
            customInput={customInput || <DisabledInput />}
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            isClearable
            showMonthDropdown
            showYearDropdown
          />
        ) : (
          <ReactDatePicker
            selected={startDate}
            onChange={(date: any) => handleChange(date)}
            onChangeRaw={(date: any) => handleRawChange(date.target.value)}
            onSelect={onSelect || validateRequired}
            placeholderText={
              attrs?.placeholder || `Enter ${attrs?.title || 'Time'}`
            }
            required={required}
            customInput={customInput || <DisabledInput />}
            className={
              error !== ''
                ? `border border-danger ${attrs?.className}`
                : attrs?.className
            }
            onBlur={handleBlur}
            isClearable
            showMonthDropdown
            showYearDropdown
          />
        )}
        <p
          style={{
            marginBottom: '1px',
            fontSize: '11px'
          }}
        >
          {dateFormat === 'DD-MM-YYYY' || dateFormat === 'DD/MM/YYYY'
            ? 'DD-MM-YYYY or DD/MM/YYYY'
            : 'MM-DD-YYY or MM/DD/YYYY'}
        </p>
        <ErrorMessage error={error} />
      </React.Fragment>
    )
  }
}
