export type InputType = {
  // default false
  isRequired: boolean;
  // applied the is-valid class when true, does nothing when false
  valid?: boolean,
  // applied the is-invalid class when true, does nothing when false
  invalid?: boolean,
  texts: { empty: string, invalid: string };
  className?: string;
  innerRef: any | null;
  // used for developer pass in additional attributes e.g. min, max, placeholder, ref etc.
  attrs: { name: string, title: string, placeholder: string, style?: React.CSSProperties, min: number, max: number};
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  // default false
  isDecimal?: boolean;
  // default 2
  decimalPlace?: number;
}

