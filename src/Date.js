import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function FormatDate(props) {
  let [date, setDate] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayDate)

  function displayDate(response) {
    console.log(response.data.dt * 1000)
    //
    setDate(response.data.dt * 1000)
  }

  return <div className="text-capitalize">{date}</div>
}
