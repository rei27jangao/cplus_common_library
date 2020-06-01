import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { TextAreaInput } from 'cplus_common_library'

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
        name="Description" 
        placeholder="Input Description" 
        minLength={3} /* not required */
        maxLength={10} /* not required */
      />
    </div>
  )
}

export default TestComponent03
