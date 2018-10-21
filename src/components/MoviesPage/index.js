import React, { Component } from 'react'
import { connect } from 'react-redux'

import Movies from '../Movies'
import './moviespage.css'

class MoviesPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <div >
                <div className='wrapper'>
                     <Movies title={ this.props.title } category={ this.props.category }  showAll={ true } />
                </div>
           </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default  connect(mapStateToProps)(Movies)