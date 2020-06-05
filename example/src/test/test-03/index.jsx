import React, { useRef } from 'react'
import { containerStyles } from '../styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { TextAreaInput, PostalInput, SelectInput } from 'cplus_common_library'

// Array for SelectInput
export const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
})

export const optionFlavours = [createOption('Chocolate'), createOption('Mango')]

const TestComponent03 = () => {
  const textAreaInput = useRef(null)
  const postalInput = useRef(null)
  const selectInput = useRef(null)

  return (
    <div style={containerStyles}>
      <TextAreaInput
        value=''
        isRequired
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
        innerRef={textAreaInput}
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
        innerRef={postalInput}
      />
      <br />
      <SelectInput
        options={optionFlavours}
        isMulti
        isRequired={true}
        defaultValue={[optionFlavours[0]]}
        classNamePrefix='samplePrefix'
        isClearable
        isDisabled={false}
        onChange={() => console.log('SelectInput Onchange')}
        getOptionLabel={(opt) => opt.label}
        getOptionValue={(opt) => opt.value}
        innerRef={selectInput}
        attrs={{
          title: 'Select Flavor',
          placeholder: 'Please select flavor',
          style: { width: '100%' }
        }}
      />
    </div>
  )
}

export default TestComponent03
