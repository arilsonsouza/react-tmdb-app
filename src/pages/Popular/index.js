import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MoviesPage from '../../components/MoviesPage'
import * as movieActions from '../../actions/Movies'
const url = '/filmes/populares'

class Popular extends Component {
  
    componentDidMount() {
        if (!this.props.movies['popular']) {
            this.props.fetchMovies('popular')
        }
    }

    render() {
        return (
            <div>
                <MoviesPage title='Filmes Populares' category='popular' url={url} showAll={true} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
