import React, { Component } from 'react'

import MoviesPage from '../../components/MoviesPage'


class NowPlaying extends Component{
    render(){
        return(
           <div>
              <MoviesPage title='Em Cartaz' category='now_playing'  showAll={ true }/>
           </div>
        )
    }
}

export default NowPlaying