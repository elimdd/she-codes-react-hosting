import React from 'react'
import Loader from 'react-loader-spinner'
import ReactAnimatedWeather from 'react-animated-weather'

const sun = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 50,
  animate: true
}

const rain = {
  icon: 'RAIN',
  color: 'blue',
  size: 50,
  animate: true
}

const cloud = {
  icon: 'FOG',
  color: 'gray',
  size: 50,
  animate: true
}

export default function Icons(props) {
  if (props.icon === 'sun') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={sun.icon}
          color={sun.color}
          size={sun.size}
          animate={sun.animate}
        />
      </div>
    )
  } else if (props.icon === 'rain') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={rain.icon}
          color={rain.color}
          size={rain.size}
          animate={rain.animate}
        />
      </div>
    )
  } else if (props.icon === 'cloud') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={cloud.icon}
          color={cloud.color}
          size={cloud.size}
          animate={cloud.animate}
        />
      </div>
    )
  } else {
    return (
      <h2>
        <div>
          <Loader type="ThreeDots" color="red" height={10} weight={10} />
        </div>
        <div>Loading...</div>
      </h2>
    )
  }
}
