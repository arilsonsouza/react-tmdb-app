import React, { Component } from 'react'

import MoviesPage from '../../components/MoviesPage'

const url = '/filmes/mais-votados'

class TopRated extends Component{
    render(){
        return(
           <div>
              <MoviesPage title='Mais votados' category='top_rated' url={ url }  showAll={ true }/>
           </div>
        )
    }
}

export default TopRated