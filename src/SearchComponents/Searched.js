import React from 'react'
import Movie from '../MoviesComponents/Movie'
import { useSelector } from 'react-redux'
import { selectPrevMovieTitle, selectPrevMovies } from '../Redux/SearchSlice'
import { selectWatchList } from '../Redux/WatchListSlice'
import './search.css'

function Searched() {

  const matchedMovies = useSelector(selectPrevMovies)
  const prevTitle = useSelector(selectPrevMovieTitle)
  const watchList = useSelector(selectWatchList)


  if (watchList.length > 0) {
    matchedMovies.forEach((movie, index) => {
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].id === movie.id) {
          matchedMovies[index] = watchList[i]
        }
      }
    })
  }

  const displayedMovieItems = matchedMovies.map((movie) => {
    return (
      <div key={movie.id} >
        <Movie {...movie} />
      </div>
    )
  })

  function searchedmovies() {
    if (matchedMovies.length > 0) {
      return (
        <div>
          <div className='SearchMoviesresult'>
            <h2>You've searched  <span>"{prevTitle}"</span></h2>
            <h3>Here {matchedMovies.length === 1 ? "Is The Movie" : "Are The Movies"}</h3>
          </div>
          <div className='findmovies'>
            {displayedMovieItems}
          </div>
        </div>
      )
    } 
    else {
      return (
        <div className='SearchMoviesresult'>
          <h2>You've searched <span>"{prevTitle}"</span></h2>
          <h3>No Moive Found</h3>
          <h3>Try Something Else</h3>
        </div>
      )
    }

  }

  return (
    <div className='MoviesBackground'>
      {prevTitle !== "" && searchedmovies()}
    </div>
  )
}

export default Searched