import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Forecast() {
  const city = 'New York'
  let [description, setDescription] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayInfo)

  function displayInfo(response) {
    console.log(response.data.weather[0].description)
    //set
    setDescription(response.data.weather[0].description)
  }

  return <div className="description">{description}</div>
}
