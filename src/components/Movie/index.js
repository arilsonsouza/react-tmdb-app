import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './movie.css'

const Movie = props => {
        return(
           <Link to={`${props.url}/${props.movie.id}`} className='movie-item-link'>
                <figure className='movie-item-poster'>
                    <img className='movie-item-img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${props.movie.poster_path}`}/>
                </figure>
                <div className='movie-item-content'>
                    <span className='movie-item-title'>{ props.movie.title }</span>
                </div>
           </Link>
        )
    
}

export default Movie