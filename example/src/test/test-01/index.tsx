import React, { useRef } from 'react'
import { containerStyles, inputStyles } from '../styles'
import Example from './sample'
import {
  TextField,
  EmailInput,
  DateTimeRangePicker
} from 'cplus_common_library'
const TestComponent01: React.FC = () => {
  const textFieldRef = useRef<any>(null)
  const emailInputRef = useRef(null)
  const datePickerRef = useRef(null)
  return (
    <div style={containerStyles}>
      <div style={inputStyles}>
        <TextField
          value=''
          innerRef={textFieldRef}
          onChange={() => console.log('TextField Onchange')}
          attrs={{
            title: 'TextField Input',
            placeHolder: 'Enter your project name',
            className: 'nothing',
            style: {
              width: '300px',
              margin: '0'
            }
          }}
          minLength={3}
          maxLength={6}
          required={true}
        />
      </div>
      <div style={inputStyles}>
        <EmailInput
          value=''
          onChange={() => console.log('Email Input Onchange')}
          attrs={{
            placeHolder: 'Enter your email',
            title: 'Email Input',
            style: {
              width: '300px',
              margin: '0'
            }
          }}
          required
          minLength={4}
          maxLength={64}
          innerRef={emailInputRef}
        />
      </div>

      <div style={containerStyles}>
        <DateTimeRangePicker
          value={new Date()}
          required={true}
          inputType='input'
          onChange={() => console.log('onChange TimePicker')}
          onSelect={() => console.log('OnSelect TimePicker')}
          type='timepicker'
          timeFormat='hh:mm:ss'
          attrs={{
            title: 'TimePicker Input',
            placeholder: 'Time-in',
            className: 'form-control'
          }}
        />
      </div>
      <div style={containerStyles}>
        <DateTimeRangePicker
          value=''
          required={true}
          onChange={() => console.log('onChange TimePicker')}
          onSelect={() => console.log('OnSelect TimePicker')}
          type='timepicker'
          timeFormat='hh:mm:ss'
          attrs={{
            title: 'TimePicker Select',
            placeholder: 'Time-in',
            className: 'form-control'
          }}
          innerRef={datePickerRef}
        />
      </div>
      <div style={containerStyles}>
        <DateTimeRangePicker
          value={new Date()}
          required={true}
          onChange={() => console.log('onChange DatePicker')}
          onSelect={() => console.log('OnSelect DatePicker')}
          type='datepicker'
          inputType='input'
          dateFormat='DD/MM/YYYY'
          attrs={{
            title: 'DatePicker Input',
            placeholder: 'Enter Arrival Date',
            className: 'form-control'
          }}
        />
      </div>
      <div style={containerStyles}>
        <DateTimeRangePicker
          value=''
          required={true}
          onChange={() => console.log('onChange DatePicker')}
          onSelect={() => console.log('OnSelect DatePicker')}
          type='datepicker'
          inputType='select'
          dateFormat='DD/MM/YYYY'
          attrs={{
            title: 'DatePicker Select',
            placeholder: 'Please choose Departure Date',
            className: 'form-control'
          }}
        />
      </div>
      <Example />
    </div>
  )
}

export default TestComponent01
