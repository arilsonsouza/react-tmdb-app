import React from 'react'
import { connect } from 'react-redux'

import Movies from '../Movies'
import Loading from '../Loading'

import './moviespage.css'

const MoviesPage = props => {
    return (
        <div >
            <div className='wrapper'>
                {  props.movies[props.category] && props.movies[props.category].isFetching && <Loading/> }
                {  props.movies[props.category] && !props.movies[props.category].isFetching && <Movies title={props.title} category={props.category} url={props.url} showAll={true} /> }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(MoviesPage)