import React, { useState } from 'react'
import axios from 'axios'
import Icons from './Icons'
import './styles.css'

export default function Emoji() {
  const city = 'New York'
  let [icon, setIcon] = useState(false)
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayIcon)

  function displayIcon(response) {
    console.log(response.data.weather[0].icon)
    //set
    setIcon(response.data.weather[0].icon)
  }
  return <Icons icon={icon} />
}
