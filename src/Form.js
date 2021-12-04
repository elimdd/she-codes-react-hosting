import React, { useState } from 'react'

export default function Form() {
  const [type, setNewType] = useState('')
  const [message, SetMessage] = useState('')

  function formSubmit(event) {
    event.preventDefault()
    alert(`Searching for...${type}`)
    SetMessage(`It's 15 ºC in ${type}`)
  }

  function cityName(event) {
    setNewType(event.target.value)
  }

  return (
    <div>
      <h2>{message}</h2>
      <form className="form" onSubmit={formSubmit}>
        <div class="row">
          <div className="col-ms-9">
            <input
              type="text"
              placeholder="Type city here..."
              onChange={cityName}
            ></input>
          </div>
          <div className="col-ms-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
  )
}
