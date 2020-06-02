import React from 'react'

import Select from 'react-select'

export const dogOptions = [{ id: 1, label: 'Chihuahua' }]
export type SelectInputProps = {
  options?: []
}

export const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return (
    <React.Fragment>
      <Select
        isMulti
        name='colors'
        options={options}
        className='basic-multi-select'
        classNamePrefix='select'
      />
    </React.Fragment>
  )
}
