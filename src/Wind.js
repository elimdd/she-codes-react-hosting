import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Forecast() {
  const city = 'New York'
  let [windy, setWindy] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWind)

  function displayWind(response) {
    console.log(Math.round(response.data.wind.speed))
    //set
    setWindy(Math.round(response.data.wind.speed))
  }

  return <div className="description">wind: {windy} km/h</div>
}
