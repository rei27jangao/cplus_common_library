export type InputType = {
  value?: any
  required?: boolean
  minLength?: number | 0
  maxLength?: number | 100
  className: string
  errors?: {
    empty?: string
    invalid?: string
  }
  attrs?: {
    placeholder?: string
    style?: any
  }
}
