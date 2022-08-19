import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Movies.css'
import { selectMovies } from '../Redux/MoviesSlice'

function MovieDetailsPage() {
  const movies = useSelector(selectMovies)
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id == id);
document.title = movie.title
  return (
    <section className='details-movie'>
      <div className='image-info-movie' >
        <img src={movie.image} alt={movie.title} />
        <table>
          <tbody>
            <tr>
              <td><h2>Title</h2></td>
              <td><h2>{movie.title}</h2></td>
            </tr>
            <tr>
              <td>Release</td>
              <td>{movie.release}</td>
            </tr>
            <tr>
              <td>Director</td>
              <td>{movie.director}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{movie.duration}</td>
            </tr>
            <tr>
              <td>Actors</td>
              <td>{movie.actors}</td>
            </tr>
            <tr>
              <td>Genres</td>
              <td>{movie.genres}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='describtion'>
        <h4>About The Movie.</h4>
        <p>{movie.describtion}</p>
      </div>
      <div className='iframe-div'>
        <iframe width="560" height="315" src={movie.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  )
}

export default MovieDetailsPage