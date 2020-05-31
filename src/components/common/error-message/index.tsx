import React from 'react'
import { ErrorMessage } from 'formik'
import { styles } from './styles'
import * as types from './types'

export const ErrorMessageComponent: React.FC<types.ErrorMessageType> = ({
  children,
  render,
  name,
  className,
  component
}) => {
  return (
    <div style={styles}>
      <ErrorMessage
        name={name}
        children={children}
        render={render}
        className={className}
        component={component}
      />
    </div>
  )
}

ErrorMessageComponent.displayName = 'Error Message'
