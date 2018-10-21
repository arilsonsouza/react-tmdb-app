import React, { Component } from 'react'
import { connect } from 'react-redux'

import Movies from '../Movies'
import './moviespage.css'

const MoviesPage = props => {
        return(
           <div >
                <div className='wrapper'>
                     <Movies title={ this.props.title } category={ this.props.category } url={ this.props.url }  showAll={ true } />
                </div>
           </div>
        )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default  connect(mapStateToProps)(Movies)