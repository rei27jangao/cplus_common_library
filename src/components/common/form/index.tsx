import React from 'react'
import { Formik, Form } from 'formik'
import * as types from './types'

export const FormComponent: React.FC<types.FormType> = ({
  children,
  propValues,
  validateOnBlur,
  validateOnChange,
  onSubmit
}) => {
  return (
    <Formik
      initialValues={propValues}
      onSubmit={onSubmit}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
    >
      {(formikBag: any) => (
        <Form onSubmit={formikBag.handleSubmit}>{children}</Form>
      )}
    </Formik>
  )
}
