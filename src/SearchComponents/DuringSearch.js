import React from 'react'
import SmallMovie from './SmallMovie'
import "./search.css"
import { Link } from 'react-router-dom'
import { Link as LinkForScroll } from 'react-scroll'
import { selectMatchedMovies } from '../Redux/SearchSlice';
import { useSelector } from 'react-redux'


function DuringSearch() {

  const matchedMovies = useSelector(selectMatchedMovies)

  const searchMovies = matchedMovies.map((movie) => {

    return (
      <div key={movie.id}>
        <LinkForScroll to='singl' smooth={true}>
          <Link to={`/movies/${movie.id}`}>
            <SmallMovie {...movie} />
          </Link>
        </LinkForScroll>
      </div>
    )
  })

  return (
    <div className='searchedMovies'>
      {searchMovies}
    </div>
  )
}

export default DuringSearch