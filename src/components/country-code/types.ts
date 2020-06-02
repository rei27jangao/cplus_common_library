export type InputType = {
  isRequired: boolean
  value: string
  className: string
  innerRef: React.RefObject<HTMLInputElement>
  texts: { empty: string; invalid: string }
  attrs: {
    name: string
    title: string
    placeholder: string
    style: React.CSSProperties
  }
}
