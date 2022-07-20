import { createContext, useReducer, useEffect } from "react";

// STATE

const initialState = {
    watchList: sessionStorage.getItem("watchList") ? JSON.parse(sessionStorage.getItem("watchList")) : [],
}

// REDUCER

function reducer (state, action) {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return{
                watchList: [action.payload, ...state.watchList],
            }

        case "REMOVE_MOVIE_FROM_WATCHLIST":
            const filtered = state.watchList.filter((existMovie) =>   existMovie.id !== action.payload.id )
            return {
                watchList: [...filtered]
            }
        default:
            return state
    }
}


export const GlobalContext = createContext(initialState);

export function GlobalProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        sessionStorage.setItem("watchList", JSON.stringify(state.watchList))
    }, [state])


    function addMovieToWatchList(movie){
        dispatch({
            type: "ADD_MOVIE_TO_WATCHLIST", 
            payload: movie
        })
    }

    function removeMovieFromWatchList(movie){
        dispatch({
            type: "REMOVE_MOVIE_FROM_WATCHLIST", 
            payload: movie
        })
    }

    return(
        <GlobalContext.Provider value={{watchList: initialState.watchList, addMovieToWatchList, removeMovieFromWatchList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}