import React from 'react'
import * as types from './types'
import { TimePicker } from './time-picker'
import { TimeRangePicker } from './time-range-picker'
import { DatePicker } from './date-picker'
import { DateRangePicker } from './date-range-picker'
import { DateTimePicker } from './date-time-picker'
import { DateTimeRangePickerDefault } from './date-time-range-picker'

export const DateTimeRangePicker: React.FC<types.DateTimeRangePickerProps> = ({
  type,
  timeFormat,
  dateFormat,
  value,
  attrs,
  texts,
  onChange,
  required,
  customInput,
  inputType,
  onSelect,
  innerRef
}) => {
  if (type === 'timepicker')
    return (
      <TimePicker
        inputType={inputType}
        onChange={onChange}
        onSelect={onSelect}
        texts={texts}
        attrs={attrs}
        timeFormat={timeFormat}
        value={value}
        required={required}
        customInput={customInput}
        innerRef={innerRef}
      />
    )
  if (type === 'datepicker')
    return (
      <DatePicker
        onChange={onChange}
        onSelect={onSelect}
        inputType={inputType}
        value={value}
        attrs={attrs}
        texts={texts}
        dateFormat={dateFormat}
        required={required}
        customInput={customInput}
        innerRef={innerRef}
      />
    )
  if (type === 'daterangepicker') return <DateRangePicker />
  if (type === 'timerangepicker') return <TimeRangePicker />
  if (type === 'datetimepicker') return <DateTimePicker />
  return <DateTimeRangePickerDefault />
}
