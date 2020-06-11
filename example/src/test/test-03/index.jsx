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
        wrapperClassName=''
        wrapperInlineStyle={{}}
        inputClassName=''
        isCounter
        isRequired
        minLength={5}
        maxLength={20}
        value=''
        onChange={() => console.log('TextArea Onchange')}
        texts={{
          empty: '',
        }}
        innerProps={{
          name: 'text:',
          title: 'text',
          rows: '5'
        }}
        innerRef={textAreaInput}
        locale='en'
      />
      <br />
      <PostalInput
        wrapperClassName=''
        wrapperInlineStyle={{}}
        inputClassName=''
        isCounter
        isRequired
        value=''
        onChange={() => console.log('TextArea Onchange')}
        texts={{
          empty: '',
        }}
        innerProps={{
          name: 'text:',
          title: 'text',
          rows: '5'
        }}
        innerRef={postalInput}
        locale='a'
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
