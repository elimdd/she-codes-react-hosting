import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'

export default function Weather(props) {
  const [ready, setReady] = useState(false)
  const [climate, setClimate] = useState(null)

  function handleResponse(response) {
    console.log(response.data)
    setClimate({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: '/',
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: 'Wednesday'
    })

    setReady(true)
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city ..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1 className="citySearch">{climate.city}</h1>
        <ul>
          <div className="row">
            <div className="col-6">
              <li>{climate.date}</li>
              <li className="text-capitalize">{climate.description}</li>
              <li className="icon">
                <img src={climate.iconUrl} alt={climate.description} />
                <span className="climate">
                  {Math.round(climate.temperature)}
                </span>
                <span>ºC</span>
                <span>/F</span>
              </li>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: {climate.humidity}</li>
                <li>Wind:13 km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    )
  } else {
    const apiKey = '023c07ca3c2cd78e926b061ce11057b7'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse)

    return <div>Loading...</div>
  }
}
