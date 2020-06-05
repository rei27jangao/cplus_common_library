import React from 'react'
import { DateTimeRangePicker } from 'cplus_common_library'

const ExampleComponent = () => {
  /*rendering component DatePicker with disabled input and select only*/
  return (
    <DateTimeRangePicker
      value={new Date()}
      required={true}
      onChange={() => console.log('onChange DatePicker')}
      onSelect={() => console.log('OnSelect DatePicker')}
      type='datepicker'
      inputType='select'
      dateFormat='DD/MM/YYYY'
      attrs={{
        title: 'DatePicker Select',
        placeholder: 'Please choose Departure Date',
        className: 'form-control'
      }}
    />
  )
}

export default ExampleComponent
