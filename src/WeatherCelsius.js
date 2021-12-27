import React from 'react'

export default function WeatherCelcius(props) {
  return (
    <span className="WeatherTemp">
      <span className="climate">{Math.round(props.celsius)}</span>
      <span className="unit">ºC </span>
    </span>
  )
}
