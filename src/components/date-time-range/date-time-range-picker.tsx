import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateTimeRangePickerDefault: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        timeCaption='time'
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      <br />
      <DatePicker
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        timeCaption='time'
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    </React.Fragment>
  )
}
