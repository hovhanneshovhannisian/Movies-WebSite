import React from 'react'
import "./search.css"

function SmallMovie(movie) {
    return (
        <div className='single-smallMovie'>
            <div className='poster'>
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className='info-box'>
                <div className='small-info'>
                    <h2>{movie.title.length >= 30 ? `${movie.title.substring(0, 30)}...` : movie.title}</h2>
                    <h3>{movie.release}</h3>
                </div>
                <p>{movie.describtion.length >= 160 ? `${movie.describtion.substring(0, 160)}...` : movie.describtion}</p>
            </div>
        </div>
    )
}

export default SmallMovie