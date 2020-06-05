export type InputType = {
  // required props
  value: string
  innerRef: any | null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined

  // set valid property. Default value is true
  valid?: boolean

  // set invalid property. Default value is false
  invalid?: boolean

  // set required property. Default value is false
  required?: boolean

  // set minimum length of input. Default value is 0
  minLength?: number

  // set maximum length of input. Default value is 100
  maxLength?: number

  // use for developer to pass specified error message
  texts?: {
    empty?: string
    invalid?: string
  }

  // use for developer to pass attributes
  attrs?: {
    title: string // required
    placeHolder?: string
    style?: any
    className?: string
  }
}
