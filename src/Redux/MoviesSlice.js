import api from '../API/moviesAPI';


export function moviesReducer(state = initialMovieState, action) {
    switch (action.type) {
        case "FETCHING_MOVIES":
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state

    }
}

export const initialMovieState = {
    movies: [
        // {
        //     id: 1,
        //     title: "Jug Jugg Jeeyo",
        //     release: 2022,
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WApoF8Pt1bRoAtEac9R68_lCqiSFXNDwUxCsqq8SizIovfBX",
        //     genres: "Comedy, Drama, Family, Romance",
        //     duration: "2h 28m",
        //     describtion: " Two couples from different generations confront their issues after marriage.",
        //     youtubeLink: "https://www.youtube.com/embed/z6ZedPiTEv0",
        //     director: "Raj Mehta",
        //     actors: 'Varun Dhawa, Kiara Advani, Anil Kapoor, Neetu Singh, Manish Paul, Prajakta Koli, Tisca Chopra, Naman Arora',
        //     category: 'movie',
        //     isListed: false,
        // }
    ]
}

export function selectMovies(state) {
    return state.movies.movies
}

export function fetchedMovies(movies) {
    return {
        type: "FETCHING_MOVIES",
        payload: movies
    }
}


// export function loadMovies() {
//     return async (dispatch, getState) => {
//         try {
//             const response = await api.get("/movies");
//             console.log(response.data)
//             dispatch(fetchedMovies(response.data))
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }