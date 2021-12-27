import React from 'react'

export default function WeatherCelcius(props) {
  return (
    <span className="WeatherTemp">
      <span className="climate-farenheint">
        {Math.round((props.farenheint * 9) / 5 + 32)}
      </span>
      <span className="unit-farenheint">ºF </span>
    </span>
  )
}
