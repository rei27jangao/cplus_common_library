import React from 'react'
import { TextField } from 'cplus_common_library'

const TestComponent01: React.FC = () => {
  let SampleValue = 'Sample'
  return (
    <div>
      <TextField
        value={SampleValue}
        required={true}
        errors={{
          empty: 'Please fill out this field',
          invalid: 'Invlaid'
        }}
        className='nothing'
        attrs={{
          placeholder: 'Enter your project name',
          style: {
            marginTop: '10px',
            width: '300px'
          }
        }}
      />
      {SampleValue}
    </div>
  )
}

export default TestComponent01
