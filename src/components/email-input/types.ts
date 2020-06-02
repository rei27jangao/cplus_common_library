export type EmailType = {
  value: any
  required?: boolean
  minLength?: number
  maxLength?: number
  errors?: {
    empty?: string
    invalid?: string
  }
  attrs?: {
    placeholder?: string
    title?: string
    style?: any
    className?: string
  }
  innerRef: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
}
