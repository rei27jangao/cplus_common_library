export type TextAreaInputProps = {
  value?: any
  isRequired?: boolean
  minLength?: number | 0
  maxLength?: number | 2000
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
  valid?: boolean | undefined;
  invalid?: boolean | undefined;
  innerRef: any | null;
}
