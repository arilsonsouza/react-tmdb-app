import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css';
import Navbar from '../Navbar'
import Home from '../../pages/Home'
import NowPlaying from '../../pages/NowPlaying'
import Popular from '../../pages/Popular'
import TopRated from '../../pages/TopRated'
import Upcoming from '../../pages/Upcoming'
import Search from '../../pages/Search'
import MovieDetail from '../../pages/MovieDetail'
import Store from '../../Store'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Provider store={Store}>
        <div className='App'>
          <Navbar {...this.props} />
          <section className='main'>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/filmes/populares' component={Popular} />
              <Route path='/filmes/mais-votados' component={TopRated} />
              <Route path='/filmes/lancamentos' component={Upcoming} />
              <Route path='/filmes/em-cartaz' component={NowPlaying} />
              <Route path='/filme/:movieId/detalhes' component={MovieDetail} />
              <Route path='/filmes/pesquisar/:query' component={Search} />
            </Switch>


          </section>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
