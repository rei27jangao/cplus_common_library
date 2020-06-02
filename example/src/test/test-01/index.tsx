import React, { useRef } from 'react'
import { containerStyles, inputStyles } from '../styles'
import { TextField, EmailInput } from 'cplus_common_library'

const TestComponent01: React.FC = () => {
  const textFieldRef = useRef<any>(null)
  const emailInputRef = useRef(null)

  return (
    <div style={containerStyles}>
      <div style={inputStyles}>
        <TextField
          value='Sample Value'
          minLength={10}
          // required={true}
          innerRef={textFieldRef}
          onChange={() => {}}
          attrs={{
            title: 'Project Name',
            placeholder: 'Enter your project name',
            className: 'nothing',
            style: {
              width: '300px',
              margin: '0'
            }
          }}
        />
        <button onClick={() => console.log(textFieldRef.current)}>
          Check Value
        </button>
      </div>
      <div style={inputStyles}>
        <EmailInput
          value=''
          onChange={() => {}}
          attrs={{
            placeholder: 'Enter your email',
            title: 'Email',
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
    </div>
  )
}

export default TestComponent01
