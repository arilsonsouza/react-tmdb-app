
export default function movies(state = [], action){
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            let category = Object.assign({}, {[ action.category ]: { isFetching: true} })
            return Object.assign({}, state, {
                ...category
            })
        break
        case 'FETCH_MOVIES_SUCCES':
            const {page, results, total_pages, total_results} = action.movies
            category = Object.assign({}, { [action.category]: {isFetching: false, page, results, total_pages, total_results} })
             return Object.assign({}, state, {
               ...category 
            })
        break
        case 'FETCH_MOVIES_FAILURE':
             return Object.assign({}, state, {
               isFetching: false,
               [action.category]: action.error
            })
        break
    
        default:
            return state
    }
}