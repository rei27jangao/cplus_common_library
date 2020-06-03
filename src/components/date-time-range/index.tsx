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
  value,
  innerRef,
  attrs,
  errors,
  onChange,
  required,
  customInput,
  inputType,
  onSelect
}) => {
  if (type === 'timepicker')
    return (
      <TimePicker
        inputType={inputType}
        onChange={onChange}
        onSelect={onSelect}
        errors={errors}
        attrs={attrs}
        timeFormat={timeFormat}
        value={value}
        innerRef={innerRef}
        required={required}
        customInput={customInput}
      />
    )
  if (type === 'timerangepicker') return <TimeRangePicker />
  if (type === 'datepicker') return <DatePicker />
  if (type === 'daterangepicker') return <DateRangePicker />
  if (type === 'datetimepicker') return <DateTimePicker />
  return <DateTimeRangePickerDefault />
}
