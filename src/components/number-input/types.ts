export type InputType = {
  isRequired: boolean;
  isDecimal: boolean;
  value?: string;
  texts: { empty: string, invalid: string };
  attrs: { name: string, title: string, placeholder: string, style?: React.CSSProperties, min: number, max: number};
}

