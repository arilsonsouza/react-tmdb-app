import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MoviesPage from '../../components/MoviesPage'
import * as movieActions from '../../actions/Movies'

class Upcoming extends Component {
   
    componentDidMount() {
        if (!this.props.movies['upcoming']) {
            this.props.fetchMovies('upcoming')
        }
    }

    render() {
        return (
            <div>
                <MoviesPage title='Próximos Lançamentos' category='upcoming' showAll={true} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)
