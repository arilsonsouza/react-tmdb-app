import React, { Component } from 'react'
import axios from 'axios'

import './movie_detail.css'
import Rowdata from '../../components/RowData'

const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const LANGUAGE = 'pt-BR'

class MovieDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            movie: null
        }

    }
    componentDidMount(){
        const { movieId } = this.props.match.params
        axios.get(`${TMDB_API_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`)
             .then(response => {
                console.log(response)
                const movie = response.data
                movie.genres = this.arrayJoin(movie.genres)
                movie.production_companies = this.arrayJoin(movie.production_companies)
                this.setState({
                    movie
                })
             }).catch(error => {
                 
             })
    }

    arrayJoin(array){
        return array.map(item => item.name).join(', ')
    }

    numberFormat(number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    }

    render(){
        const { movie } = this.state
        return(
            <div>
                { this.state.movie && <div className='movie-detail-page' >
               <header className='movie-detail-header' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path})` }}>
                   <div className='movie-detail-header-container'>
                        <div className='movie-detail-header-content'>
                            <div className='movie-detail-poster-path'>
                                <img className='movie-detail-poster-path-img' alt={ movie.title } src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                            </div>
                            <div className='movie-detail-data-container'>
                                    <h1>{ movie.title }</h1>
                                    <span className='movie-detail-tagline color-style'>{ movie.tagline }</span>
                                    <p className='movie-detail-overview'>
                                        { movie.overview }
                                    </p>
                                    <span className='movie-detail-genre-list color-style'>
                                        { movie.genres }
                                    </span>
                                    <span className='movie-detail-production-companies'>
                                        { movie.production_companies }
                                    </span>
                                   <Rowdata firstTitle='Ano de Lançamento:' firstValue={ movie.release_date } 
                                            secondTitle='Duração' secondValue={ `${movie.runtime} minutos` }/>

                                    <Rowdata firstTitle='Receita:' firstValue={ this.numberFormat(movie.revenue) } 
                                    secondTitle='Média dos Votos:' secondValue={ `${movie.vote_average}/10` }/>
                            </div>
                        </div>
                   </div>
               </header>
            </div> }
            </div>
        )
    }
}

export default MovieDetail