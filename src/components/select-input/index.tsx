import React, { useState, useEffect } from 'react'
import CreatableSelect from 'react-select/creatable'
import * as types from './types'

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

export const SelectInput: React.FC<types.SelectInputProps> = ({
  isRequired,
  options,
  value,
  texts,
  isMulti,
  onChange,
  classNamePrefix,
  isClearable,
  isDisabled,
  onCreateOption,
  defaultValue,
  getOptionLabel,
  getOptionValue,
  attrs
}) => {
  const [selectedOptions, setSelectedOptions] = useState(value)
  const [error, setError] = useState('')
  useEffect(() => {}, [error])

  const handleChange = (selected: any) => {
    setSelectedOptions(selected)
    onChange(selected)
  }

  const handleBlur = () => {
    if (isRequired) {
      if (selectedOptions === null) {
        // console.log('true')
        setError(texts?.empty || `Please select ${attrs?.title}`)
        setSelectedOptions(value)
      } else {
        setError('')
      }
    } else {
      setError('')
    }
    // console.log(selectedOptions)
  }

  return (
    <React.Fragment>
      <CreatableSelect
        isMulti={isMulti}
        isRequired={isRequired}
        options={options}
        value={value}
        classNamePrefix={classNamePrefix}
        onChange={(selected: any) => handleChange(selected)}
        onBlur={handleBlur}
        invalid={error !== ''}
        onCreateOption={onCreateOption}
        defaultValue={defaultValue}
        isClearable={isClearable}
        name={attrs?.name}
        placeholder={attrs?.placeholder}
        style={attrs?.style}
        isDisabled={isDisabled}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
      {renderErrorMessage(error)}
      {JSON.stringify(selectedOptions)}
    </React.Fragment>
  )
}
