export function setQuery(query){
    return dispatch => {
        dispatch({
            type: 'SET_QUERY',
            query
        })
    }
}