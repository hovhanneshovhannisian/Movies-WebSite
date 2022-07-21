import { combineReducers, createStore } from "redux";
import { initialSearchState, searchReducer } from "./SearchSlice";
import { initialWatchListState, watchListReducer } from "./WatchListSlice";

const store = createStore(combineReducers({
    search: searchReducer,
    watchList: watchListReducer,
}), {
    search: initialSearchState,
    watchList: initialWatchListState,
})

export default store