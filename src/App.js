import './App.css'
import './styles.css'

import Form from './Form'
import City from './City'
import Date from './Date'
import Forecast from './Forecast'
import Emoji from './Emoji'
import Temperature from './Temperature'
import Humidity from './Humidity'
import Wind from './Wind'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <h1>Weather APP</h1>
          <div class="container">
            <Form />
            <br />
            <City />
            <div class="row">
              <div class="col">
                <Date />
                <Forecast />
              </div>
              <div class="col">
                <Humidity />
                <Wind />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <Emoji />
              </div>
              <div class="col">
                <Temperature />
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-primary">Start</button>
          <footer>
            <a
              className="github"
              href="https://github.com/elimdd/she-codes-react-hosting"
            >
              Open Source code
            </a>
            <span> by </span>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/elianamdeus/"
            >
              Eliana Marques
            </a>
          </footer>
        </div>
      </header>
    </div>
  )
}

export default App
