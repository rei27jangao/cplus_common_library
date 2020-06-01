import React from 'react'
import { FormComponent, CountryInput, SubmitButton, NumberInput } from 'cplus_common_library'

const TestComponent02: React.FC = () => {
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
      <FormComponent
        propValues={{inputForm: ''}}
        onSubmit={(values: any) => {
          window.alert(JSON.stringify(values))
        }}>
        <CountryInput
          isRequired={true}
          // value="JP"
          texts={{
            empty: 'Please fill the required field',
            invalid: 'Invalid country code format.' }}
          attrs={{
            name: 'inputForm', 
            title: 'Input Title', 
            placeholder: 'Enter a Country code', 
            style: { width: '10%' }
          }}
        />
        <NumberInput
          isRequired={true}
          isDecimal={true}
          texts={{
            empty: 'Please fill the required field',
            invalid: 'Format incorrect'
          }}
          attrs={{
            name: 'number01',
            title: 'Input Number', 
            placeholder: 'Enter a text', 
            min: 1, 
            max: 10,
            style: { width: '10%' }
          }}
         />
      </FormComponent>
    </div>
  )
}

export default TestComponent02
