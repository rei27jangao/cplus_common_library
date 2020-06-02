import React, {useRef} from 'react'
import { CountryInput, NumberInput } from 'cplus_common_library'

const TestComponent02: React.FC = () => {
  const textInput = useRef(null);
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        Testing Components2
      </h1>
      <CountryInput
        isRequired={true}
        value=""
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Invalid country code format.'
        }}
        attrs={{
          name: 'inputForm',
          title: 'Input Title',
          placeholder: 'Enter a Country code',
          style: { width: '12%' }
        }}
        className="form-control"
        innerRef={textInput}
      />
      <NumberInput
        isRequired={true}
        isDecimal={false}
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Format incorrect'
        }}
        attrs={{
          name: 'number01',
          title: 'Input Number',
          placeholder: 'Enter a text',
          min: 5,
          max: 10,
          style: { width: '12%' }
        }}
      />
    </div>
  )
}

export default TestComponent02
