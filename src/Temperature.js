import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Forecast() {
  const city = 'New York'
  let [temp, setTemp] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemp)

  function displayTemp(response) {
    console.log(Math.round(response.data.main.temp))
    //set
    setTemp(Math.round(response.data.main.temp))
  }

  return <div className="temperature">{temp}ºC</div>
}
