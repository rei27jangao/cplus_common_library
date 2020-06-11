import React, { useRef } from 'react'
import { containerStyles } from '../styles'
import { TextField, EmailInput } from 'cplus_common_library'

const TestComponent01 = () => {
  const textFieldRef = useRef(null)

  return (
    <>
      <div style={containerStyles}>
        <TextField
          isRequired={true}
          value=''
          isCounter
          innerRef={textFieldRef}
          onChange={() => console.log('TextField Onchange')}
          texts={{
            placeholder: 'Enter your project name',
            validate: 'Please Enter a valid sample'
          }}
          minLength={2}
          maxLength={3}
          locale='en'
        />
        <EmailInput
          isRequired={true}
          value=''
          isCounter
          innerRef={textFieldRef}
          onChange={() => console.log('TextField Onchange')}
          texts={{
            placeholder: 'Enter your email',
            validate: 'Please Enter a valid email'
          }}
          minLength={2}
          // maxLength={30}
          locale='en'
        />
      </div>
    </>
  )
}

export default TestComponent01
