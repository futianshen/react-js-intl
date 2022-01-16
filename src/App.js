import logo from "./logo.svg"
import "./App.css"
import { defineMessages, defineMessage, useIntl } from "react-intl"

const messages = defineMessages({
  test2: { id: "test2", defaultMessage: "default" },
})

function App() {
  const { formatMessage } = useIntl()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{formatMessage({ id: "test", defaultMessage: "default" })}</div>
        <div>{formatMessage(messages.test2)}</div>
        <div>
          {formatMessage(
            defineMessage({ id: "test", defaultMessage: "default" })
          )}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
