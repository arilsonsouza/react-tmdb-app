import axios from 'axios'

const TMDB_API_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = 'dbaef0501d0ac3d26e8279360f21551a'

export function fetchMovies(category, page = 1, endPoint = 'movie', language = 'pt-BR') {

    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIES_REQUEST',
        })
        
        return axios.get(`${TMDB_API_URL}/${endPoint}/${category}?api_key=${TMDB_API_KEY}&language=${language}&page=${page}`)
            .then(response => {
                if (!response.status === 200) {
                    dispatch({
                        type: 'FETCH_MOVIES_FAILURE',
                        error: response.data,
                        category
                    })
                } else {
                    dispatch({
                        type: 'FETCH_MOVIES_SUCCES',
                        movies: response.data,
                        category
                    });
                }
            }).catch(error => {

            })
    }

}