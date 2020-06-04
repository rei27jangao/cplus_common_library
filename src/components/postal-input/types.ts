export type PostalInputProps = {
  value?: any
  isRequired?: boolean
  minLength?: number
  maxLength?: number
  className?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  texts?: {
    empty?: string
    invalid?: string
  }
  attrs?: {
    name?: string
    title?: string
    placeholder?: string
    style?: React.CSSProperties
  }
}
