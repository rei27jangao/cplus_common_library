type TextType = {
  placeholder?: string | undefined
  empty: string
  validate: string
}

export type CommonType<T> = {
  value: any | undefined | null
  texts: TextType
  innerRef: React.Ref<HTMLInputElement> | any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  innerProps?: {}
  valid?: boolean
  invalid?: boolean
  wrapperClassName?: string | undefined
  inputClassName?: string | undefined
  wrapperInlineStyle?: React.CSSProperties | undefined
  inputInlineStyle?: React.CSSProperties | undefined
  isRequired?: boolean | undefined
  isCounter?: boolean | undefined
  locale: 'jp' | 'en' | string
} & T
