export type InputType = {
  isRequired: boolean;
  value: string;
  className: string;
  innerRef: any | null;
  texts: { empty: string; invalid: string; }
  // used for developer pass in additional attributes e.g. title, style, placeholder, ref etc.
  attrs: {
    name: string;
    title: string;
    placeholder: string;
    style: React.CSSProperties;
  }
  // applied the is-valid class when true, does nothing when false
  valid?: boolean,
  // applied the is-invalid class when true, does nothing when false
  invalid?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
}
