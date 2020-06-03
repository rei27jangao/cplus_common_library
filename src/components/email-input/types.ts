export type EmailType = {
  value: any
  innerRef: any
  valid?: boolean
  invalid?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  required?: boolean
  minLength?: number
  maxLength?: number
  errors?: {
    empty?: string
    invalid?: string
  }
  attrs?: {
    title: string
    placeHolder?: string
    style?: any
    className?: string
  }
}
