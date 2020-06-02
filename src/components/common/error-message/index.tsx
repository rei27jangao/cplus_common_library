import React from 'react'
import * as types from './types'

export const ErrorMessage: React.FC<types.ErrorType> = ({ error }) => {
  const errorStyles = {
    marginBottom: '5px',
    paddingLeft: '5px',
    color: '#dc3545',
    fontSize: '12px'
  }

  return <p style={errorStyles}>{error}</p>
}
