import React, { useState } from 'react'
import axios from 'axios'
import Daily from './Daily'

export default function InfoDailyWeather(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecastData, setForecastData] = useState()

  function handleResponse(response) {
    setForecastData(response.data.daily)
    setLoaded(true)
  }

  if (loaded) {
    console.log(forecastData)
    return (
      <div className="daily-forecast">
        <div className="row">
          <Daily data={forecastData[0]} />
          <Daily data={forecastData[1]} />
          <Daily data={forecastData[2]} />
          <Daily data={forecastData[3]} />
          <Daily data={forecastData[4]} />
          <Daily data={forecastData[5]} />
        </div>
      </div>
    )
  } else {
    let lon = props.coordinates.lon
    let lat = props.coordinates.lat
    let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    axios.get(`${apiUrl}`).then(handleResponse)
    return null
  }
}
