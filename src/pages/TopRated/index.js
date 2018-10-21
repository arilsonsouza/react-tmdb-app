import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MoviesPage from '../../components/MoviesPage'
import * as movieActions from '../../actions/Movies'
const url = '/filmes/mais-votados'

class TopRated extends Component {
  
    componentDidMount() {
        if (!this.props.movies['top_rated']) {
            this.props.fetchMovies('top_rated')
        }
    }

    render() {
        return (
            <div>
                <MoviesPage title='Mais votados' category='top_rated' url={url} showAll={true} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopRated)
