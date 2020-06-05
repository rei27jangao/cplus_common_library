export type DateTimeRangePickerProps = {
  // required props
  type:
    | 'timepicker'
    | 'timerangepicker'
    | 'datepicker'
    | 'daterangepicker'
    | 'datetimepicker'
    | 'datetimerrangepicker'
  value: Date | any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  onSelect: (
    date: Date,
    event: React.SyntheticEvent<any> | undefined
  ) => void | undefined

  // select whether render datepicker or timepicker as select or with Input. Default value is select
  inputType?: 'select' | 'input'

  // let developer pass as custom Input
  customInput?: React.ReactNode

  // set required property. Default value is false
  required?: boolean

  // use for developer to pass specified error message
  texts?: {
    empty?: string
    invalid?: string
  }

  // use for developer to pass attributes
  attrs?: {
    title: string // required
    placeholder?: string
    className?: string
  }

  // set format for time Picker. Required when using TimePicker
  timeFormat?: 'hh:mm:ss' | 'hh:mm'

  // set format for Date Picker. Required when using DatePicker
  dateFormat?:
    | 'DD-MM-YYYY'
    | 'DD/MM/YYYY'
    | 'MM-DD-YYYY'
    | 'MM/DD/YYYY'
    | undefined

  innerRef?: any
}

export type TimePickerProps = {
  value: Date | any
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
  texts?: {
    empty?: string
    invalid?: string
  }
  innerRef?: any
}

export type DatePickerProps = {
  value: any
  dateFormat:
    | 'DD-MM-YYYY'
    | 'DD/MM/YYYY'
    | 'MM-DD-YYYY'
    | 'MM/DD/YYYY'
    | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined
  onSelect: (
    date: Date | any,
    event: React.SyntheticEvent<any> | undefined
  ) => void | undefined
  inputType: 'select' | 'input' | undefined
  customInput?: React.ReactNode
  required?: boolean
  attrs?: {
    title: string
    placeholder?: string
    className?: string
  }
  texts?: {
    empty?: string
    invalid?: string
  }
  innerRef?: any
}
