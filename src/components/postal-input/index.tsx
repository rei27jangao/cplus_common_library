import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import { toHalfWidth } from '../../utils/toHalfWidthConverter'
import { CommonType } from '../../models/'
import i18n from '../i18n'

export const PostalInput: React.FC<CommonType<{
  minLength: number
  maxLength: number
  locale?: string
}>> = ({
  wrapperClassName,
  inputClassName,
  isCounter,
  isRequired,
  invalid,
  minLength = 3,
  maxLength = 10,
  texts,
  innerRef,
  wrapperInlineStyle,
  inputInlineStyle,
  value,
  innerProps,
  onChange,
  locale = 'en' || 'jp' || 'tw'
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
    // eslint-disable-next-line no-useless-escape
    const singleHypenSpace = /^(?=.{1,10}$)([a-zA-Z0-9]+\s{0,1}[a-zA-Z0-9]*\-{0,1}[a-zA-Z0-9]+)$/
    const latinChar = /^[A-Za-z]+$/
    const alphaFullExp = /^[Ａ-ｚ]+$/

    if (isRequired) {
      if (targetValue === '') {
        setErrMessage(texts?.empty || t('error_messages.required'))
        setTargetValue(value)
      } else if (
        !(
          targetValue.match(singleHypenSpace) ||
          targetValue.match(latinChar) ||
          targetValue.match(alphaFullExp)
        )
      ) {
        setErrMessage(texts?.validate)
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

    setTargetValue(toHalfWidth(targetValue))
  }

  return (
    <React.Fragment>
      <div className={wrapperClassName} style={wrapperInlineStyle}>
        <Input
          onBlur={handleBlur}
          className={inputClassName}
          isCounter={isCounter}
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
        <p className='text-danger'>{errMessage}</p>
      </div>
    </React.Fragment>
  )
}
