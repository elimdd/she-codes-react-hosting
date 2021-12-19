import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Daily from './Daily'

export default function InfoDailyWeather(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
    setForecastData(response.data.daily)
    setLoaded(true)
  }

  if (loaded) {
    console.log(forecastData)
    return (
      <div className="daily-forecast">
        <div className="row">
          {forecastData.map(function (dailyDisplay, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <Daily data={dailyDisplay} />
                </div>
              )
            } else {
              return null
            }
          })}
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
