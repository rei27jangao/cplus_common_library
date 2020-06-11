import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import { toHalfWidth } from '../../utils/toHalfWidthConverter'
import { CommonType } from '../../models/models'
import { Counter } from '../common/counter'
import i18n from '../i18n'

export const TextAreaInput: React.FC<CommonType<{
  minLength?: number | 0
  maxLength?: number | 2000
  locale?: any
}>> = ({
  wrapperClassName,
  inputClassName,
  isCounter,
  isRequired,
  invalid,
  minLength,
  maxLength,
  texts,
  innerRef,
  wrapperInlineStyle,
  inputInlineStyle,
  value,
  innerProps,
  onChange,
  locale
}) => {
  const [errMessage, setErrMessage] = useState('')
  const [targetValue, setTargetValue] = useState(value)
  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [])

  const handleChange = (val: any) => {
    setTargetValue(val.target.value)
    onChange(val)
  }

  const handleBlur = () => {
    if (isRequired) {
      if (targetValue === '') {
        setErrMessage(texts?.empty || t('error_messages.required'))
        setTargetValue(value)
      } else {
        if (minLength !== undefined && minLength > targetValue.length) {
          setErrMessage(`Must be minimum of ${minLength} characters only`)
        } else if (maxLength !== undefined && maxLength < targetValue.length) {
          setErrMessage(`Must be maximum of ${maxLength} characters only`)
        } else {
          setErrMessage('')
        }
      }
    } else {
      setErrMessage('')
    }

    setTargetValue(
      toHalfWidth(
        targetValue
          .replace(/(^\s*)|(\s*$)/gi, '') // removes leading and trailing spaces
          .replace(/[ ]{2,}/gi, ' ') // replaces multiple spaces with one space
          .replace(/\n +/, '\n') // Removes spaces after newlines
      )
    )
  }

  return (
    <React.Fragment>
      <div className={wrapperClassName} style={wrapperInlineStyle}>
        <Input
          type='textarea'
          onBlur={handleBlur}
          className={inputClassName}
          required={isRequired}
          invalid={invalid || errMessage !== ''}
          minLength={minLength}
          maxLength={maxLength}
          text={texts}
          innerRef={innerRef}
          {...innerProps}
          style={inputInlineStyle}
          value={targetValue}
          onChange={(val: any) => handleChange(val)}
          locale={locale}
        />
        {isCounter && (
          <Counter
            textDataValue={targetValue.length}
            maxLengthValue={maxLength || 2000}
          />
        )}{' '}
        &nbsp;
        <span className='text-danger'>{errMessage}</span>
      </div>
    </React.Fragment>
  )
}
