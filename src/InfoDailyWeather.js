import React from 'react'
import Icons from './Icons'

export default function InfoDailyWeather() {
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
