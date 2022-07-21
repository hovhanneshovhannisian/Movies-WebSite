
// REDUCER
export function watchListReducer(state = initialWatchListState, action) {
    switch (action.type) {
        case "ADD_MOVIE_TO_WL":
            return {
                watchList: [action.payload, ...state.watchList]
            }
        case "REMOVE_MOVIE_FROM_WL":
            const filtered = state.watchList.filter((existMovie) => existMovie.id !== action.payload.id)
            return {
                watchList: [...filtered]
            }
        default:
            return state;
    }
}

// INITIAL STATE
export const initialWatchListState = {
    watchList: sessionStorage.getItem("watchList") ?
        JSON.parse(sessionStorage.getItem("watchList"))
        : [],
}

// SELECTORS
export function selectWatchList(state) {
    return state.watchList.watchList;
}


// DISPLTCHES
export function RD_addMovieToWatchList(movie) {
    return {
        type: "ADD_MOVIE_TO_WL",
        payload: movie
    }
}

export function RD_removeMovieFromWatchList(movie) {
    return {
        type: "REMOVE_MOVIE_FROM_WL",
        payload: movie
    }
}
