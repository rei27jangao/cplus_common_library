import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { TextAreaInput, SelectInput } from 'cplus_common_library'

export const dogOptions = [
  { id: 1, label: 'Chihuahua' },
];

const TestComponent03: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        Testing Components 3
      </h1>
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
