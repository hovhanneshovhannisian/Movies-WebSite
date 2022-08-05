import React, { useEffect, useState } from 'react'
import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'
import './Movies.css'
import { Link as LinkForScroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RD_addMovieToWatchList, RD_removeMovieFromWatchList, selectWatchList } from '../Redux/WatchListSlice'

function Movie(props) {
  const [isListed, setIsListed] = useState(props.isListed)

  const watchList = useSelector(selectWatchList)
  const dispatch = useDispatch()

  console.log("mounted for: " + props.title)
  useEffect(() => {
    sessionStorage.setItem("watchList", JSON.stringify(watchList))
  }, [watchList])

  function added() {
    setIsListed(!isListed)
    props = {
      ...props,
      isListed: !isListed
    }
    !isListed ? dispatch(RD_addMovieToWatchList(props)) : dispatch(RD_removeMovieFromWatchList(props))
  }

  return (
    <div className='single-movie'>

      <div className={isListed ? "WatchLaterAdded" : 'WatchLater'} onClick={() => added()} title={isListed ? "Remove From Watch Later" : "Add To Watch Later"}>
        {isListed ? <MdPlaylistAddCheck /> : <MdPlaylistAdd />}
      </div>

      <LinkForScroll to='singl' smooth={true}>
        <Link to={`/movies/${props.id}`}>
          <div>
            <img src={props.image} alt={props.title} />
            <div className='info'>
              <h2 title={props.title}>{props.title.length >= 16 ? `${props.title.substring(0, 16)}...` : props.title}</h2>
              <h3>{props.release}</h3>
            </div>
            <p title={props.genres}>{props.genres.length >= 22 ? `${props.genres.substring(0, 22)}...` : props.genres}</p>
          </div>
        </Link>
      </LinkForScroll>
    </div>
  )
}

export default Movie;