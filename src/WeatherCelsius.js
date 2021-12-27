import React, { useState } from 'react'

export default function WeatherCelcius(props) {
  const [unit, setUnit] = useState('celsius')

  function showCelsius(event) {
    event.preventDeafault()
    setUnit('celsius')
  }

  function setFahrenheit() {
    return (props.celsius * 9) / 5 + 32
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemp">
        <span className="climate">{Math.round(props.celsius)}</span>
        <span className="unit">ºC</span>
      </div>
    )
  } else {
    return (
      <div className="WeatherTemp">
        <span className="climate">{Math.round(props.celsius)}</span>
        <span className="unit">ºC</span>
      </div>
    )
  }
}
