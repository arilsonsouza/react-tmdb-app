import React, { Component } from 'react'

import MoviesPage from '../../components/MoviesPage'

const url = '/filmes/em-cartaz'

const NowPlaying = props => {
        return(
           <div>
              <MoviesPage title='Em Cartaz' category='now_playing' url={url}  showAll={ true }/>
           </div>
        )
}

export default NowPlaying