import React from 'react'
import Icons from './Icons'
import axios from 'axios'

export default function InfoDailyWeather(props) {
  function handleResponse(response) {
    console.log(response.data)
  }
  let lon = props.coordinates.lon
  let lat = props.coordinates.lat
  let apiKey = '023c07ca3c2cd78e926b061ce11057b7'
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

  axios.get(`${apiUrl}`).then(handleResponse)

  return (
    <div className="daily-forecast">
      <div className="row">
        <div className="col">
          Monday
          <br />
          <Icons icons="01n" />
          <br />
          <span>19 ºC</span> | <span>10 ºC</span>
        </div>
        <div className="col">
          Monday
          <br />
          <Icons icons="01n" />
          <br />
          <span>19 ºC</span> | <span>10 ºC</span>
        </div>
        <div className="col">
          Monday
          <br />
          <Icons icons="01n" />
          <br />
          <span>19 ºC</span> | <span>10 ºC</span>
        </div>
        <div className="col">
          Monday
          <br />
          <Icons icons="01n" />
          <br />
          <span>19 ºC</span> | <span>10 ºC</span>
        </div>
        <div className="col">
          Monday
          <br />
          <Icons icons="01n" />
          <br />
          <span>19 ºC</span> | <span>10 ºC</span>
        </div>
        <div></div>
      </div>
    </div>
  )
}
