import React, { useRef } from 'react'
import { containerStyles, inputStyles } from '../styles'
import {
  TextField,
  EmailInput,
  DateTimeRangePicker
} from 'cplus_common_library'
const TestComponent01: React.FC = () => {
  const textFieldRef = useRef<any>(null)
  const emailInputRef = useRef(null)
  const timerPickerRef = useRef(null)
  return (
    <div style={containerStyles}>
      <div style={inputStyles}>
        <TextField
          value=''
          minLength={3}
          maxLength={6}
          required={true}
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
        />
        <button onClick={() => console.log(textFieldRef)}>Check Element</button>
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
        <button onClick={() => console.log(emailInputRef)}>
          Check Element
        </button>
      </div>

      <div style={containerStyles}>
        <DateTimeRangePicker
          value=''
          required={true}
          innerRef={timerPickerRef}
          inputType='input'
          onChange={() => console.log('onChange TimePicker')}
          onSelect={() => console.log('OnSelect TimePicker')}
          type='timepicker'
          timeFormat='hh:mm:ss'
          attrs={{
            title: 'Time In Input',
            placeholder: 'Time-in',
            className: 'form-control'
          }}
        />
        <button onClick={() => console.log(timerPickerRef)}>
          Check Element
        </button>
      </div>
      <div style={containerStyles}>
        <DateTimeRangePicker
          value=''
          required={true}
          innerRef={timerPickerRef}
          inputType='select'
          onChange={() => console.log('onChange TimePicker')}
          onSelect={() => console.log('OnSelect TimePicker')}
          type='timepicker'
          timeFormat='hh:mm:ss'
          attrs={{
            title: 'Time In Select',
            placeholder: 'Time-in',
            className: 'form-control'
          }}
        />
        <button onClick={() => console.log(timerPickerRef)}>
          Check Element
        </button>
      </div>
    </div>
  )
}

export default TestComponent01
