import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import movies from '../data/data'
import './Movies.css'

function MovieDetailsPage() {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id == id);

  return (
    <section className='details-movie'>
      <div className='image-info-movie' >
        <img src={movie.image} alt={movie.title} />
        <table>
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
        </table>
      </div>
      <div className='describtion'>
        <h4>About The Movie.</h4>
        <p>{movie.describtion}</p>
      </div>
      <div className='iframe-div'>
        <iframe width="560" height="315" src={movie.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default MovieDetailsPage