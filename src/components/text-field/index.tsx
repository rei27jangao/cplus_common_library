/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as types from './types'
import { ErrorMessage } from '../common/error-message'
import { Counter } from '../common/counter'
import {
  noSpaceAtBeginning,
  noSpaceAtBeginningAndLast,
  fixDoubleSpacing,
  fixSpacing
} from '../../utils/regex'

export const TextField: React.FC<types.TextFieldType> = ({
  value,
  texts,
  innerRef,
  onChange,
  innerProps,
  wrapperClassName,
  inputClassName,
  wrapperInlineStyle,
  inputInlineStyle,
  isRequired,
  isCounter,
  maxLength,
  minLength,
  valid,
  invalid,
  locale
}) => {
  const { t } = useTranslation()
  const [stateValue, setStateValue] = useState(value)
  const [error, setError] = useState('')

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [])

  const handleChange = (e: any) => {
    const inputValue = e.target.value
    setStateValue(inputValue.replace(noSpaceAtBeginning, ''))
    onChange(e)
  }

  const checkLength = () => {
    if (minLength !== undefined && minLength > stateValue.length) {
      setError(`${t('error_messages.minimum')}${minLength}`)
    } else {
      setError('')
    }
  }

  const checkIfRequired = () => {
    if (stateValue === '') {
      setError(texts.empty || t('error_messages.required'))
    } else {
      checkLength()
    }
  }

  const handleBlur = () => {
    isRequired && checkIfRequired()
    const fixedValue = stateValue
      .replace(noSpaceAtBeginningAndLast, '')
      .replace(fixDoubleSpacing, ' ')
      .replace(fixSpacing, '\n')

    setStateValue(fixedValue)
  }

  return (
    <div style={wrapperInlineStyle} className={wrapperClassName}>
      {isCounter && (
        <Counter
          textDataValue={stateValue.length}
          maxLengthValue={maxLength || 100}
        />
      )}
      <Input
        value={stateValue}
        required={isRequired}
        innerRef={innerRef}
        placeholder={texts?.placeholder}
        maxLength={maxLength || 100}
        minLength={minLength || 0}
        {...innerProps}
        onChange={(e: any) => handleChange(e)}
        onBlur={handleBlur}
        valid={valid}
        invalid={invalid || error !== ''}
        style={inputInlineStyle}
        className={inputClassName}
      />
      {error && <ErrorMessage error={error} />}
    </div>
  )
}
