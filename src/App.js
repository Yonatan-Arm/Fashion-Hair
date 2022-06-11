// ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// ALL COMPONENTS GOES HERE
import { AppNav } from './components/AppNav'
import { HomePage } from './pages/HomePage'
import Price  from './pages/Price'
import About  from './pages/About'


function App() {
  return (
    <Router>
      <div className='App'>
          <AppNav />
          <Switch>
            <Route path='/price' component={Price} />
            <Route path='/about' component={About} />
            <Route path='/' component={HomePage} />
          </Switch>
      </div>
    </Router>
  )
}

export default App
