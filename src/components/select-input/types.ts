export type SelectInputProps = {
  isRequired?: boolean
  isMulti?: boolean
  onCreateOption?: any
  options: any
  value?: any | null
  onChange?: any
  defaultValue?: any
  classNamePrefix?: string
  isClearable?: boolean
  isDisabled?: boolean
  getOptionLabel?: any
  getOptionValue?: any
  innerRef: any | null
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
