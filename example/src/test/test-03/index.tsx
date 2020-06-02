import React from 'react'
import { containerStyles } from '../styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { TextAreaInput, SelectInput } from 'cplus_common_library'

export const dogOptions = [{ id: 1, label: 'Chihuahua' }]

const TestComponent03: React.FC = () => {
  return (
    <div style={containerStyles}>
      <TextAreaInput
        value=''
        name='Description'
        required={true}
        maxLength={20}
        errors={{
          empty: 'Please fill out this field',
          invalid: 'Format incorrect'
        }}
        className='nothing'
        attrs={{
          placeholder: 'Enter description'
        }}
      />
      <SelectInput /* options={dogOptions} */ />
    </div>
  )
}

export default TestComponent03
