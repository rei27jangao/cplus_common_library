import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const TimeRangePicker: React.FC = () => {
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  return (
    <React.Fragment>
      <p>Work In Process..</p>
      <DatePicker
        selected={startTime}
        onChange={(date: any) => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={1}
        timeCaption='Time'
        dateFormat='HH:mm'
      />
      <br />
      <DatePicker
        selected={endTime}
        onChange={(date: any) => setEndTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={1}
        timeCaption='Time'
        dateFormat='HH:mm'
      />
    </React.Fragment>
  )
}
