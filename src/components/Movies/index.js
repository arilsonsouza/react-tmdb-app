import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Movie from '../Movie'
import './movies.css'

class  Movies extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentPage: 2
        }
    }

    numberFormat(number){
        return new Intl.NumberFormat('pt-BR').format(number)
    }

    loadMore = () => {
        const currentPage = this.state.currentPage

        console.log(currentPage);
        this.setState({
            currentPage: currentPage+1
        })
    }

    render(){   
        
        return(
            <div className='movies'>
                <header className='movies-header'>
                    <h2 className='movies-title'> { this.props.title } </h2>
                     { !this.props.showAll ? <Link to={ this.props.url } className='movies-link'>Ver todos</Link> 
                      : this.props.movies[this.props.category] && <span className='movies-results'>{ this.numberFormat(this.props.movies[this.props.category].total_results) } resultados</span> }
                </header>
                {this.props.movies[this.props.category] && <ul className='movies-list'>
                   {  
                    this.props.movies[this.props.category].results.slice(0, 5).map(movie => 
                        <li className='movie-item' key={ movie.id }>
                            <Movie movie={ movie } url={ this.props.url }/>
                        </li>
                        )
                   }
                </ul>}

                {this.props.showAll && <div className='movies-load-more'>
                    <button onClick={ () => this.loadMore() } className='movies-load-more-btn'>Carregar Mais</button>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

// export default Movies
export default  connect(mapStateToProps)(Movies)