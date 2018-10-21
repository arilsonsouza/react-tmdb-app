import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MoviesPage from '../../components/MoviesPage'
import * as movieActions from '../../actions/Movies'
const url = '/filmes/em-cartaz'

class NowPlaying extends Component {

        componentDidMount() {
                if (!this.props.movies['now_playing']) {
                        this.props.fetchMovies('now_playing')
                }
        }

        render() {
                return (
                        <div>
                                <MoviesPage title='Em Cartaz' category='now_playing' url={url} showAll={true} />
                        </div>
                )
        }
}

const mapStateToProps = state => ({
        movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)
