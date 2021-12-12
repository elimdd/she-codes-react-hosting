import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Humidity() {
  const city = 'New York'
  let [humidity, setHumidity] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayHumidity)

  function displayHumidity(response) {
    console.log(response.data.main.humidity)
    //set
    setHumidity(response.data.main.humidity)
  }

  return <div className="description">humidity: {humidity} %</div>
}
