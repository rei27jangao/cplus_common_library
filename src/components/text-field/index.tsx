import React from 'react'
import { Field } from 'formik'
import * as types from './types'
import { validate } from './validate'
import { ErrorMessageComponent } from '../common/error-message'

export const TextField: React.FC<types.InputType> = ({ name, required }) => {
  return (
    <React.Fragment>
      <Field name={name} validate={(e: any) => validate(e, name, required)} />
      <ErrorMessageComponent name={name} />
    </React.Fragment>
  )
}
