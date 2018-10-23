import axios from 'axios'

const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

export function fetchMovies(category, page = 1, language = 'pt-BR') {

    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIES_REQUEST',
        })

        return axios.get(`${TMDB_API_URL}/movie/${category}?api_key=${TMDB_API_KEY}&language=${language}&page=${page}`)
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

export function searchMovies(category, query, page = 1, language = 'pt-Br') {
    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIES_REQUEST',
        })

        return axios.get(`${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=${language}&page=${page}`)
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

export function removeCategoryFromMovies(category){
    return dispatch => {
        return dispatch({
            type: 'REMOVE_CATEGORY_FROM_MOVIES',
            category
        })
    }
}