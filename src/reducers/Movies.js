
export default function movies(state = [], action) {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return Object.assign({}, state)
        case 'FETCH_MOVIES_SUCCES':
            let { page, results, total_pages, total_results } = action.movies
            const category = Object.assign({}, { [action.category]: { isFetching: false, page, results, total_pages, total_results } })

            return Object.assign({}, state, {
                ...category
            })

        case 'FETCH_MOVIES_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                [action.category]: action.error
            })

        case 'REMOVE_CATEGORY_FROM_MOVIES':
            const newState = delete state[action.category]
            console.log(newState)
            return state

        default:
            return state
    }
}