import React from 'react'
import Icons from './Icons'

export default function Daily(props) {
  function dayTime() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[day]
  }

  return (
    <div className="col">
      {dayTime()}
      <br />
      <Icons icon={props.data.icon} />
      <br />
      <span>{Math.round(props.data.temp.max)} ºC</span> |{' '}
      <span>{Math.round(props.data.temp.min)} ºC</span>
    </div>
  )
}
