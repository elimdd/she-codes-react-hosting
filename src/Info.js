import React from 'react'
import FormatDate from './FormatDate'
import './Weather.css'
import WeatherCelsius from './WeatherCelsius'

export default function info(props) {
  return (
    <div className="weatherInfo">
      <div className="container" id="box">
        <h1 className="citySearch">{props.data.city}</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <FormatDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li className="icon">
                <img src={props.data.iconUrl} alt={props.data.description} />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}</li>
              <li>Wind:{Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
          <WeatherCelsius celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  )
}
