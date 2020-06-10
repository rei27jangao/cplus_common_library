import React from 'react'
import * as types from './types'

export const Counter: React.FC<types.CounterType> = ({
  textDataValue,
  maxLengthValue
}) => {
  return (
    <span className='text-muted fs-11 text-right'>
      <span className={textDataValue > maxLengthValue ? 'text-danger' : ''}>
        {textDataValue}
      </span>
      /{maxLengthValue}
    </span>
  )
}
