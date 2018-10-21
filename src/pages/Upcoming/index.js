import React, { Component } from 'react'

import MoviesPage from '../../components/MoviesPage'

const url =  '/filmes/lancamentos' 

class Upcoming extends Component{
    render(){
        return(
           <div>
              <MoviesPage title='Próximos Lançamentos' category='upcoming' url={ url }  showAll={ true }/>
           </div>
        )
    }
}

export default Upcoming