export type InputType = {
  value: any
  innerRef: any | null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  valid?: boolean
  invalid?: boolean
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
