export type DateTimeRangePickerProps = {
  value: any
  innerRef: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  onSelect: (
    date: Date,
    event: React.SyntheticEvent<any> | undefined
  ) => void | undefined
  inputType?: 'select' | 'input'
  customInput?: React.ReactNode
  type:
    | 'timepicker'
    | 'timerangepicker'
    | 'datepicker'
    | 'daterangepicker'
    | 'datetimepicker'
    | 'datetimerrangepicker'
  required?: boolean
  timeFormat?: 'hh:mm:ss' | 'hh:mm'
  attrs?: {
    title: string
    placeholder?: string
    style?: any
    className?: string
  }
  errors?: {
    empty?: string
    invalid?: string
  }
}

export type TimePickerProps = {
  value: any
  innerRef: any
  timeFormat: 'hh:mm:ss' | 'hh:mm' | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  onSelect: (
    date: Date,
    event: React.SyntheticEvent<any> | undefined
  ) => void | undefined
  inputType?: 'select' | 'input' | undefined
  customInput?: React.ReactNode
  required?: boolean
  attrs?: {
    title: string
    placeholder?: string
    className?: string
  }
  errors?: {
    empty?: string
    invalid?: string
  }
}
