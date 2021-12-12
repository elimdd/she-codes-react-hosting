import React from 'react'
import Loader from 'react-loader-spinner'
import ReactAnimatedWeather from 'react-animated-weather'

const clearDay = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 50,
  animate: true
}
const clearNight = {
  icon: 'CLEAR_NIGHT',
  color: 'black',
  size: 50,
  animate: true
}
const rainDay = {
  icon: 'RAIN',
  color: 'blue',
  size: 50,
  animate: true
}
const rainNight = {
  icon: 'RAIN',
  color: 'black',
  size: 50,
  animate: true
}
const cloudyDay = {
  icon: 'PARTLY_CLOUDY_DAY',
  color: 'yellow',
  size: 50,
  animate: true
}
const cloudyNight = {
  icon: 'PARTLY_CLOUDY_NIGHT',
  color: 'gray',
  size: 50,
  animate: true
}
const snowDay = {
  icon: 'SNOW',
  color: 'white',
  size: 50,
  animate: true
}
const snowNight = {
  icon: 'SNOW',
  color: 'black',
  size: 50,
  animate: true
}
const windyDay = {
  icon: 'WIND',
  color: 'gray',
  size: 50,
  animate: true
}
const windyNight = {
  icon: 'WIND',
  color: 'white',
  size: 50,
  animate: true
}

export default function Icons(props) {
  if (props.icon === '01d') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={clearDay.icon}
          color={clearDay.color}
          size={clearDay.size}
          animate={clearDay.animate}
        />
      </div>
    )
  } else if (props.icon === '01n') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={clearNight.icon}
          color={clearNight.color}
          size={clearNight.size}
          animate={clearNight.animate}
        />
      </div>
    )
  } else if (props.icon === '09d' || '10d' || '11d') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={rainDay.icon}
          color={rainDay.color}
          size={rainDay.size}
          animate={rainDay.animate}
        />
      </div>
    )
  } else if (props.icon === '09n' || '10n' || '11n') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={rainNight.icon}
          color={rainNight.color}
          size={rainNight.size}
          animate={rainNight.animate}
        />
      </div>
    )
  } else if (props.icon === '02d' || '03d' || '04d') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={cloudyDay.icon}
          color={cloudyDay.color}
          size={cloudyDay.size}
          animate={cloudyDay.animate}
        />
      </div>
    )
  } else if (props.icon === '02n' || '03n' || '04n') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={cloudyNight.icon}
          color={cloudyNight.color}
          size={cloudyNight.size}
          animate={cloudyNight.animate}
        />
      </div>
    )
  } else if (props.icon === '13d') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={snowDay.icon}
          color={snowDay.color}
          size={snowDay.size}
          animate={snowDay.animate}
        />
      </div>
    )
  } else if (props.icon === '13n') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={snowNight.icon}
          color={snowNight.color}
          size={snowNight.size}
          animate={snowNight.animate}
        />
      </div>
    )
  } else if (props.icon === '50d') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={windyDay.icon}
          color={windyDay.color}
          size={windyDay.size}
          animate={windyDay.animate}
        />
      </div>
    )
  } else if (props.icon === '50n') {
    return (
      <div>
        {' '}
        <ReactAnimatedWeather
          icon={windyNight.icon}
          color={windyNight.color}
          size={windyNight.size}
          animate={windyNight.animate}
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
