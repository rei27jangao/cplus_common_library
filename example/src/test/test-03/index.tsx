import React from 'react'
import { containerStyles } from '../styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { TextAreaInput, PostalInput, SelectInput } from 'cplus_common_library'


export const createOption = (label: any) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
})

export const optionFlavours = [
  createOption('Chocolate')
];


const TestComponent03: React.FC = () => {
  // const textAreaRef= useRef(null)

  // const handleCreate = (inputValue: any) => {
  //   const { options } = this.state;
  //   const newOption = createOption(inputValue);
  //   console.log(newOption);
  //   console.groupEnd();
  //   this.setState({
  //     options: [...options, newOption],
  //     value: newOption
  //   });
  // };

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
        attrs={{
          placeholder: 'Enter description'
        }}
        // innerRef={textAreaRef}
      />
      <PostalInput
        value=''
        name='Postal Code:'
        required={true}
        errors={{
          empty: 'Please fill out this field',
          invalid: 'Format incorrect'
        }}
        attrs={{
          placeholder: 'Enter description'
        }}
        // innerRef={textAreaRef}
      />
      <SelectInput
        options={optionFlavours}
        // isMulti
        isRequired={true}
        errors={{
          empty: 'Please fill out this field',
          invalid: 'Format incorrect'
        }} 
      />
    </div>
  )
}

export default TestComponent03
