import React, { useState, useEffect, useCallback } from 'react'
import { Label, Input } from 'reactstrap'

export type InputTypes = {
  value: any
  isValidValue: boolean
  errorMessage: any
}

export type TextAreaProps = {
  name: any
  placeholder: any
  minLength?: number
  maxLength?: number
}

export const TextAreaInput: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  minLength,
  maxLength
}) => {
  const [inputs, setInputs] = useState<InputTypes>({
    value: '',
    isValidValue: true,
    errorMessage: ''
  })

  const handleChange = useCallback((event: any) => {
    setInputs({
      value: event.target.value,
      isValidValue: false,
      errorMessage: ''
    })
    // var textInput = event.target.value
    if (event.target.value === undefined) {
      console.log('undefined')
    }
  }, [])

  useEffect(() => {
    handleChange(event)
  }, [])

  const validateInput = (value: any) => {
    const alphabet = /^(?! +$)[A-Za-zăâîșțĂÂÎȘȚ -]+$/
    // const en = /^[A-Za-z0-9]*$/
    // const ja = /^[a-zA-Z0-9]+$/
    // const ch = /(\p{Script=Hani})+/gu

    if (value !== null && value === '') {
      const resetInput = ''
      return {
        value: resetInput,
        isValidValue: false,
        errorMessage: 'field cannot be empty'
      }
    } else if (!alphabet.exec(value)) {
      return {
        value: inputs.value,
        isValidValue: false,
        errorMessage: 'space only is invalid'
      }
    } else {
      return {
        isValidValue: true,
        errorMessage: ''
      }
    }
  }

  const handleBlur = useCallback(() => {
    const { value, isValidValue, errorMessage } = validateInput(inputs.value)
    setInputs({
      value: value,
      isValidValue: isValidValue,
      errorMessage: errorMessage
    })
  }, [inputs.value, validateInput])
  console.log()
  return (
    <div>
      <Label>
        {name} &nbsp; /{maxLength}
      </Label>
      <Input
        type='textarea'
        placeholder={placeholder}
        value={inputs.value}
        onChange={handleChange}
        onBlur={handleBlur}
        minLength={minLength}
        maxLength={maxLength}
      />
      <span>{inputs.errorMessage}</span>
    </div>
  )
}
