import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'
import Info from './Info'
import InfoDailyWeather from './InfoDailyWeather'

export default function Weather(props) {
  const [ready, setReady] = useState(false)
  const [climate, setClimate] = useState(null)
  const [cityName, setCityName] = useState(props.defaultCity)

  function handleResponse(response) {
    console.log(response.data)
    setClimate({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    })

    setReady(true)
  }

  function search() {
    const apiKey = '023c07ca3c2cd78e926b061ce11057b7'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleCityChange(event) {
    setCityName(event.target.value)
  }

  if (ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city ..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <Info data={climate} />
        <InfoDailyWeather />
      </div>
    )
  } else {
    search()
    return <div>Loading...</div>
  }
}
