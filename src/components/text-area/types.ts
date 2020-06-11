export type TextAreaInputTypes = {
  wrapperClassName?: string
  inputClassName?: string
  isCounter?: boolean
  isRequired?: boolean
  invalid?: boolean | undefined
  minLength?: number | 0
  maxLength?: number | 2000
  texts?: {
    placeholder?: string | 'Enter Text'
    validate?: string | 'Please enter text'
    empty?: string
  }
  innerRef: any | null
  wrapperInlineStyle?: {}
  inputInlineStyle?: {}
  value?: any
  innerProps?: {}
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  locale?: any
}
