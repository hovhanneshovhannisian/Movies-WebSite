import React from 'react'
import SmallMovie from './SmallMovie'
import "./search.css"
import { Link } from 'react-router-dom'
import { Link as LinkForScroll } from 'react-scroll'


function DuringSearch({ matchedMovies, getAction }) {
  const searchMovies = matchedMovies.map((movie) => {
    return (
      <LinkForScroll to='singl' smooth={true}>
        <div key={movie.id} onClick={() => getAction()} >
          <Link to={`/movies/${movie.id}`}>
            <SmallMovie {...movie} />
          </Link>
        </div>
      </LinkForScroll>
    )
  })

  return (
    <div className='searchedMovies'>
      {searchMovies}
    </div>
  )
}

export default DuringSearch