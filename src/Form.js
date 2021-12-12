import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const [city, setCity] = useState(null)
  let [temperature, setTemperature] = useState(null)
  let [description, setDescription] = useState(null)
  let [wind, setWind] = useState(null)
  let [humidity, setHumidity] = useState(null)
  let [icon, setIcon] = useState(null)
  let [loaded, setLoaded] = useState(false)

  function displayTemperature(response) {
    console.log(response.data.main.temp)
    console.log(response.data.weather[0].description)
    console.log(Math.round(response.data.wind.speed))
    console.log(response.data.main.humidity)
    console.log(response.data.weather[0].icon)
    //set
    setTemperature(response.data.main.temp)
    setDescription(response.data.weather[0].description)
    setWind(Math.round(response.data.wind.speed))
    setHumidity(response.data.main.humidity)
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    )
    setLoaded(true)
  }

  function formSubmit(event) {
    event.preventDefault()
    let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature)
  }

  function citySearch(event) {
    setCity(event.target.value)
  }

  let form = (
    <form className="form" onSubmit={formSubmit}>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            placeholder="Type city here..."
            onChange={citySearch}
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-light btn-lg btn-outline-secondary"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  )

  if (loaded) {
    return (
      <div>
        <div>{form}</div>
        <br />
        <section>
          <div>City: {city}</div>
          <div>Temperature: {Math.round(temperature)} ºC</div>
          <div>Weather: {description}</div>
          <div>Wind: {wind} km/h</div>
          <div>Humidity: {humidity} %</div>
          <div>
            <img src={icon} alt="icon" />
          </div>
        </section>
      </div>
    )
  } else {
    return <div>{form}</div>
  }
}
