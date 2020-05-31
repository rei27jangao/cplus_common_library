import React from 'react'
import { FormComponent, TextField, SubmitButton } from 'cplus_common_library'

const TestComponent01: React.FC = () => {
  const initialValues = {
    firstName: '',
    lastName: ''
  }
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        Testing Components
      </h1>
      <FormComponent
        propValues={initialValues}
        onSubmit={(values: any) => {
          window.alert(JSON.stringify(values))
        }}
      >
        <TextField name='firstName' required />
        <TextField name='lastName' required />
        <SubmitButton text='Go' />
      </FormComponent>
    </div>
  )
}

export default TestComponent01
