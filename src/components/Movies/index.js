import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as movieActions from '../../actions/Movies'
import Movie from '../Movie'
import Pagination from '../Pagination'

import './movies.css'

class Movies extends Component {

    constructor(props) {
        super(props)

        this.state = {
           rowsPerPage: 20,
           paginationRange: 10
        }
    }

    numberFormat(number) {
        return new Intl.NumberFormat('pt-BR').format(number)
    }

    movies = () => {
        return this.props.showAll ? this.props.movies[this.props.category].results : this.props.movies[this.props.category].results.slice(0, 10)
    }

    render() {

        return (
            <div className='movies'>
                <header className='movies-header'>
                    <h2 className='movies-title'> {this.props.title} </h2>
                    {!this.props.showAll ? <Link to={this.props.url} className='movies-link'>Ver todos</Link>
                        : this.props.movies[this.props.category] && <span className='movies-results'>{this.numberFormat(this.props.movies[this.props.category].total_results)} resultados</span>}
                </header>
                {this.props.movies[this.props.category] && <ul className='movies-list'>
                    {
                        this.movies().map(movie =>
                             <li className='movie-item' key={movie.id}>
                                <Movie movie={movie} url={this.props.url} />
                            </li>
                        )
                    }
                </ul>}

                {this.props.showAll && <div className='movies-load-more'>
                    {this.props.movies[this.props.category] && <Pagination currentPage={ this.props.movies[this.props.category].page }
                        collectionLength={ this.props.movies[this.props.category].total_results }
                        rowsPerPage={ this.state.rowsPerPage }
                        paginationRange={ this.state.paginationRange }
                        category={ this.props.category } />}
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)