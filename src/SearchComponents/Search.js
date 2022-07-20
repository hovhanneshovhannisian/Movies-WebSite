import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import movies from '../data/data'
import DuringSearch from './DuringSearch';
import { Link } from 'react-router-dom'
import './search.css'

function Search() {

    const [movieTitle, setMovieTitle] = useState("")
    const [matchedMovies, setMatchedMovies] = useState([])

    function handleChange(e) {
        setMovieTitle(e.target.value)
    }

    function searchingMovies() {
        const titleRegex = movieTitle.toLowerCase();
        const filtered = movies.filter((movie) => {
            const searchingMovie = movie.title.toLowerCase();
            return searchingMovie.match(titleRegex)
        })
        setMatchedMovies(filtered)
    }

    function getAction() {
        setMatchedMovies([])
        setMovieTitle("")
    }

    function searchBox() {
        console.count("dsds: ")
        if (movieTitle.length !== 0 && matchedMovies.length > 0) {
            return (
                <div className='smallMovies' >
                    <DuringSearch matchedMovies={matchedMovies} getAction={getAction} />
                </div>
            )
        }
        if (movieTitle.length !== 0 && matchedMovies.length == 0) {
            return (
                <div className='notFound'>
                    <h2>No Result</h2>
                </div>
            )
        }
    }

    return (
        <div className='searchDiv'>
            <div className='searchBar'>
                <input onKeyUp={searchingMovies} onChange={handleChange} placeholder={'Search...'} value={movieTitle} />
                
                <Link to='/searched-movies' >
                    <div className='searchIcon'>
                        <AiOutlineSearch />
                    </div>
                </Link>
            </div>
            <div>{searchBox()}</div>
        </div>
    )
}

export default Search