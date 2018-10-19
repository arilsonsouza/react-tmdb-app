import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css';
import Navbar from '../Navbar'
import Home from '../../pages/Home'
import NowPlaying from '../../pages/NowPlaying'
import Popular from '../../pages/Popular'
import TopRated from '../../pages/TopRated'
import Upcoming from '../../pages/Upcoming'
import Search from '../../pages/Search'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className='App'>
            <Navbar {...this.props}/>
            <section className='main'>
               <Switch>
                  <Route exact path='/' component={ Home }/>
                  <Route  path='/populares' component={ Popular }/>
                  <Route  path='/mais-votados' component={ TopRated }/>
                  <Route  path='/lancamentos' component={ Upcoming }/>
                  <Route  path='/em-cartaz' component={ NowPlaying }/>
                  <Route  path='/pesquisar/:query' component={ Search }/>
               </Switch>
            </section>
        </div>
    );
  }
}

export default withRouter(App);
