import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateTimePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={15}
      timeCaption='time'
      dateFormat='MMMM d, yyyy h:mm aa'
    />
  )
}
