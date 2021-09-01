import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Watched from './components/movie_page/Watched'
import Watchlist from './components/movie_page/Watchlist'
import Add from './components/add/Add'
import './App.css'
import './components/add/add.css'
import './components/header/header.css'
import './components/movie_card/movieCard.css'
import './components/movie_control/movieControl.css'
import './components/results_card/resultCards.css'
import './components/movie_page/moviePage.css'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Watchlist />
          </Route>

          <Route path='/watched'>
            <Watched />
          </Route>

          <Route path='/add'>
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
