import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import { ButtonProvider } from './Context/ButtonContext'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Router>
      <ButtonProvider>
        <App />
      </ButtonProvider>
    </Router>
  </StrictMode>,
  rootElement
)
