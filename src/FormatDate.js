import React from 'react'

export default function formatDate(props) {
  console.log(props.date)

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  let day = days[props.date.getDay()]
  let hours = props.date.getHours()
  if (hours < 10) {
    hours = `0${hours}`
  }

  let minutes = props.date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  )
}
