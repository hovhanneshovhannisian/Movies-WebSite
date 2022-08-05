import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import DuringSearch from './DuringSearch';
import { Link } from 'react-router-dom'
import './search.css'
import { useSelector, useDispatch } from 'react-redux';
import { editMovieName, selectMovieTitle, selectMatchedMovies, setMatchedMovies, setSearchResult, makeStateZero } from '../Redux/SearchSlice';
import { Link as LinkForScroll } from 'react-scroll'
import { selectMovies } from '../Redux/MoviesSlice';

function Search() {
    const dispatch = useDispatch()
    const movies = useSelector(selectMovies)
    const movieTitle = useSelector(selectMovieTitle)
    const matchedMovies = useSelector(selectMatchedMovies)

    function handleChange(e) {
        dispatch(editMovieName(e.target.value))
    }

    function searchingMovies() {
        const titleRegex = movieTitle.toLowerCase();
        const filtered = movies.filter((movie) => {
            const searchingMovie = movie.title.toLowerCase();
            return searchingMovie.match(titleRegex)
        })
        dispatch(setMatchedMovies(filtered))
    }

    function searchBox() {
        if (movieTitle.length !== 0 && matchedMovies.length > 0) {
            return (<DuringSearch />)
        }
        if (movieTitle.length !== 0 && matchedMovies.length == 0) {
            return (
                <div className='notFound'>
                    <h2>No Result</h2>
                </div>
            )
        }
    }

    function searchCurTitle() {
        dispatch(setSearchResult(movieTitle, matchedMovies))
        dispatch(makeStateZero())
    }

    return (
        <div className='searchDiv'>
            <div className='searchBar'>
                <input onKeyUp={searchingMovies} onChange={handleChange} placeholder={'Search...'} value={movieTitle} />

                <LinkForScroll to='singl' smooth={true}>
                    <Link to='/searched-movies' >
                        <div className='searchIcon' onClick={searchCurTitle}>
                            <AiOutlineSearch />
                        </div>
                    </Link>
                </LinkForScroll>

            </div>
            <div className='searchBoxPar'>{searchBox()}</div>
        </div>
    )
}

export default Search