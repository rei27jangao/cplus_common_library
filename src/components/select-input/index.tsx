import React, { useState, useEffect, useCallback } from 'react'

import CreatableSelect from 'react-select'

export type SelectInputProps = {
  isRequired?: boolean
  isMulti?: boolean
  onCreateOption?: any
  options: any
  value?: any
  errors?: {
    empty?: string
    invalid?: string
  }
}

export const renderErrorMessage = (error: string) => {
  if (error !== '')
    return (
      <p
        style={{
          color: 'red'
        }}
      >
        {error}
      </p>
    )
  return ''
}

export const SelectInput: React.FC<SelectInputProps> = ({
  isRequired,
  options,
  value,
  errors,
  isMulti,
  onCreateOption
}) => {
  const [selectedOptions, setSelectedOptions] = useState(value)
  const [error, setError] = useState('')
  useEffect(() => {}, [error])

  const handleChange = useCallback((selected: any) => {
    setSelectedOptions(selected.value)
  }, [])

  const handleBlur = () => {
    if (isRequired === true) {
      if (selectedOptions === 'default') {
        console.log('true')
        setError(errors?.empty || 'Please fill out this field')
        setSelectedOptions(value)
      } else {
        console.log('false')
      }
    } else {
      setError('')
    }
  }

  return (
    <React.Fragment>
      <CreatableSelect
        isMulti={isMulti}
        isRequired={isRequired}
        options={options}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={error !== ''}
        onCreateOption={onCreateOption}
      />
      {renderErrorMessage(error)}
      {selectedOptions}
      {JSON.stringify(options)}
    </React.Fragment>
  )
}
