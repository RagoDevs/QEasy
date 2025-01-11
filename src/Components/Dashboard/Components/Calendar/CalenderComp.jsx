import React from 'react';
import './CalendarNew.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function CalenderComp() {
  return (
    <>
    <div className='calendar'>
      <h2>Appointmensts Calendar</h2>
      <div className="calendar-fix">
      <Calendar />
      </div>
    </div>
  </>
  )
}

export default CalenderComp
