import React from 'react'
import "./search.css"
import {useDispatch} from 'react-redux'
import { makeStateZero } from '../Redux/SearchSlice'

function SmallMovie(movie) {

    const dispatch = useDispatch()

    function clicked(){
        dispatch(makeStateZero())
    }

    return (
        <div className='single-smallMovie' onClick={() => clicked() }>
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