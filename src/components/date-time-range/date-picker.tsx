import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
    />
  )
}
