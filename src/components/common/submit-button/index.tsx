import React from 'react'
import * as types from './types'

export const SubmitButton: React.FC<types.SubmitButtonType> = ({
  styles,
  text
}) => <input type='submit' value={text} style={styles} />

SubmitButton.displayName = 'Submit Button'
