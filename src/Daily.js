import React from 'react'
import Icons from './Icons'
import './styles.css'

export default function Daily(props) {
  function dayTime() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[day]
  }

  return (
    <div className="col">
      <container>
        {dayTime()}
        <br />
        <Icons icon={props.data.icon} />
      </container>
      <container>
        <div className="max-temp">{Math.round(props.data.temp.max)} ºC</div>
        <div className="min-temp">{Math.round(props.data.temp.min)} ºC</div>
      </container>
    </div>
  )
}
