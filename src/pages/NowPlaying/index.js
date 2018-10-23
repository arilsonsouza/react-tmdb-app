import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MoviesPage from '../../components/MoviesPage'
import * as movieActions from '../../actions/Movies'

class NowPlaying extends Component {

        componentDidMount() {
                if (!this.props.movies['now_playing']) {
                        this.props.fetchMovies('now_playing')
                }
        }

        render() {
                return (
                        <div>
                                <MoviesPage title='Em Cartaz' category='now_playing' showAll={true} />
                        </div>
                )
        }
}

const mapStateToProps = state => ({
        movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)
