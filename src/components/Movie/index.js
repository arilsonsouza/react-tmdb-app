import React from 'react'
import { Link } from 'react-router-dom'

import './movie.css'
import noImage from './no-image.png'

const Movie = props => {
        return(
            <Link to={`/filme/${props.movie.id}/detalhes`} className='movie-item-link'>
                <figure className='movie-item-poster'>
                   {props.movie.poster_path && <img alt={  props.movie.title } className='movie-item-img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${props.movie.poster_path}`}/>}
                   {!props.movie.poster_path && <img alt={  props.movie.title } className='movie-item-img' src={noImage} style={{ height: '100%' }}/>}
                </figure>
                <div className='movie-item-content'>
                    <span className='movie-item-title'>{ props.movie.title }</span>
                </div>
           </Link>
        )
    
}

export default Movie