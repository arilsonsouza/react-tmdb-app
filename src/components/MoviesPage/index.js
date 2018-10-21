import React from 'react'
import { connect } from 'react-redux'

import Movies from '../Movies'
import './moviespage.css'

const MoviesPage = props => {
    return (
        <div >
            <div className='wrapper'>
                <Movies title={props.title} category={props.category} url={props.url} showAll={true} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(MoviesPage)