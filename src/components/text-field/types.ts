export type InputType = {
  value: any
  required?: boolean
  minLength?: number
  maxLength?: number
  innerRef: any | null
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
}