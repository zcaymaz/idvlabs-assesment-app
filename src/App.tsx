import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pages from './pages/Pages'

const App :FC = () => {
  return (
    <Router>
      <Navbar/>
      <Pages />
    </Router>
  )
}

export default App