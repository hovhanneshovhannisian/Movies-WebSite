import { combineReducers, createStore } from "redux";
import { initialMovieState, moviesReducer } from "./MoviesSlice";
import { initialSearchState, searchReducer } from "./SearchSlice";
import { initialWatchListState, watchListReducer } from "./WatchListSlice";

const store = createStore(combineReducers({
    search: searchReducer,
    watchList: watchListReducer,
    movies: moviesReducer
}), {
    search: initialSearchState,
    watchList: initialWatchListState,
    movies: initialMovieState
})

export default store