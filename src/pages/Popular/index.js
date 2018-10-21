import React, { Component } from 'react'

import MoviesPage from '../../components/MoviesPage'

const url = '/filmes/populares'

class Popular extends Component{
    render(){
        return(
           <div>
              <MoviesPage title='Filmes Populares' category='popular' url={ url } showAll={ true }/>
           </div>
        )
    }
}

export default Popular