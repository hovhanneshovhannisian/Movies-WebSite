// REDUCER

export function searchReducer(state = initialSearchState, action) {
    switch (action.type) {
        case "CHANGE_SEARCH_BAR":
            return {
                ...state,
                movieTitle: action.payload
            }
        case "SET_MOVIES":
            return {
                ...state,
                matchedMovies: action.payload
            }
        case "ZERO_STATE":
            return {
                ...state,
                movieTitle: "",
                matchedMovies: [],
            }
        case "SET_PREV_TITLE":
            return {
                ...state,
                prevSearchedTitle: action.payload.prevTitle,
                prevSearchedMovie: action.payload.prevMovie,
            }
        default:
            return state;
    }
    
}

// INITIAL STATE

export const initialSearchState = {
    movieTitle: "",
    matchedMovies: [],
    prevSearchedTitle: "",
    prevSearchedMovie: [],
}



// SELECTORS

export function selectMatchedMovies(state) {
    return state.search.matchedMovies;
}

export function selectMovieTitle(state) {
    return state.search.movieTitle;
}

export function selectPrevMovieTitle(state) {
    return state.search.prevSearchedTitle;
}

export function selectPrevMovies(state) {
    return state.search.prevSearchedMovie;
}


// DISPATHCES

export function editMovieName(newName) {
    return {
        type: "CHANGE_SEARCH_BAR",
        payload: newName
    }
}

export function setMatchedMovies(movies){
    return {
        type: "SET_MOVIES",
        payload: movies
    }
}
export function makeStateZero(){
    return {
        type:"ZERO_STATE" 
    }
}

export function setSearchResult(prevTitle, prevMovie) {
    return {
        type: "SET_PREV_TITLE",
        payload:{
            prevTitle,
            prevMovie,
        } 
    }
}