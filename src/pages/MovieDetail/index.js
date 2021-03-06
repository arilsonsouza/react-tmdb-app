import React, { Component } from 'react'
import axios from 'axios'

import './movie_detail.css'
import noImage from '../../components/Movie/no-image.png'
import Rowdata from '../../components/RowData'
import Slide from '../../components/Slide'
import Loading from '../../components/Loading'

const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const LANGUAGE = 'pt-BR'

class MovieDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: null,
            cast: null,
            crew: null,
            loading: true
        }

    }

    filterByprofilePath = (list) => {
        return list.filter(item => item.profile_path)
    }

    movieCredits = (movieId) => {
        axios.get(`${TMDB_API_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`)
            .then(({ data }) => {
                const cast = this.filterByprofilePath(data.cast)
                const crew = this.filterByprofilePath(data.crew)
                this.setState({
                    cast,
                    crew,
                    loading:false
                })
            }).catch(error => {

            })
    }
    componentDidMount() {
        const { movieId } = this.props.match.params
        axios.get(`${TMDB_API_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`)
        .then(response => {
            const movie = response.data
            movie.genres = this.arrayJoin(movie.genres)
            movie.production_companies = this.arrayJoin(movie.production_companies)
            this.setState({
                movie
            })
            this.movieCredits(movieId)

            }).catch(error => {

            })
    }

    arrayJoin(array) {
        return array.map(item => item.name).join(', ')
    }

    numberFormat(number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    }

    render() {
        const { movie, cast, crew, loading } = this.state
        return (
            <div>
                { loading && <Loading/> }
                {this.state.movie && !loading && <div className='movie-detail-page' >
                    <header className='movie-detail-header' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path})` }}>
                        <div className='movie-detail-header-container'>
                            <div className='movie-detail-header-content'>
                                <div className='movie-detail-poster-path'>
                                    <img className='movie-detail-poster-path-img' alt={movie.title} src={ movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noImage} />
                                </div>
                                <div className='movie-detail-data-container'>
                                    <h1>{movie.title}</h1>
                                    <span className='movie-detail-tagline color-style'>{movie.tagline}</span>
                                    <p className='movie-detail-overview'>
                                        {movie.overview}
                                    </p>
                                    <span className='movie-detail-genre-list color-style'>
                                        {movie.genres}
                                    </span>
                                    <span className='movie-detail-production-companies'>
                                        {movie.production_companies}
                                    </span>
                                    <Rowdata firstTitle='Ano de Lançamento:' firstValue={movie.release_date}
                                        secondTitle='Duração' secondValue={`${movie.runtime ? movie.runtime : '0'} minutos`} />

                                    <Rowdata firstTitle='Receita:' firstValue={this.numberFormat(movie.revenue)}
                                        secondTitle='Média dos Votos:' secondValue={`${movie.vote_average}/10`} />
                                </div>
                            </div>

                        </div>
                    </header>
                            {cast && <Slide properties={ cast } title='Elenco'/> }
                            {crew && <Slide properties={ crew } title='Produção'/> }
                </div>}
            </div>
        )
    }
}

export default MovieDetail