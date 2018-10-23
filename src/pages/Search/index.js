import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as movieActions from '../../actions/Movies'
import * as queryActions from '../../actions/Query'

import MoviesPage from '../../components/MoviesPage'
import Loading from '../../components/Loading'

class Search extends Component {
  
    componentDidMount() {
        const { query } = this.props.match.params
        this.props.setQuery(query)
        if (!this.props.movies['search']) {
            this.props.searchMovies('search', query)
        }
    }

    componentWillUnmount() {
        this.props.removeCategoryFromMovies('search')
        this.props.setQuery(null)
    }

    render() {

        return (
            <div>
                { this.props.movies.isFetching && <Loading/>}
                { !this.props.movies.isFetching && <MoviesPage title={`Pesquisa: ${this.props.query}`} 
                                                                category='search' showAll={true} /> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    query: state.query
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, movieActions, queryActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)