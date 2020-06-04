import React from 'react'
import { containerStyles } from '../styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { TextAreaInput, PostalInput, SelectInput } from 'cplus_common_library'

export const createOption = (label: any) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
})

export const optionFlavours = [
  createOption('Chocolate'),
  createOption('Mango')
];

const TestComponent03: React.FC = () => {
  
  return (
    <div style={containerStyles}>
      <TextAreaInput
        value=''
        isRequired={true}
        maxLength={20}
        onChange={() => console.log('TextArea Onchange')}
        texts={{
          empty: 'Please fill out this field',
          invalid: 'Format incorrect'
        }}
        minLength={5}
        attrs={{
          title: 'Description:',
          placeholder: 'Enter description',
          style: { width: '100%' }
        }}
      />
      <br />
      <PostalInput
        value=''
        isRequired={true}
        onChange={() => console.log('InputPostal Onchange')}
        texts={{
          empty: 'Please fill out this field',
          invalid: 'Format incorrect'
        }}
        attrs={{
          title: 'Country/Zip Code:',
          placeholder: 'Enter postal/zip code',
          style: { width: '100%' }
        }}
        // innerRef={textAreaRef}
      />
      <br />
      <SelectInput
        options={optionFlavours}
        isMulti
        isRequired
        defaultValue={[optionFlavours[0]]}
        classNamePrefix="samplePrefix"
        isClearable
        isDisabled={false}
        onChange={() => console.log('SelectInput Onchange')}
        getOptionLabel={(opt:any) => opt.label}
        getOptionValue={(opt:any) => opt.value}
        attrs={{
          title: 'flavor',
          placeholder: 'Please select flavor',
          style: { width: '100%' }
        }}
      />
    </div>
  )
}

export default TestComponent03
