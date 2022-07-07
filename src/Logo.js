import React from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import './MoviesComponents/Movies.css'

function Logo() {
    return (
        <div className='logo'>
            <BiCameraMovie className='logo-icon' />
            <h2>Trailers.</h2>
        </div>
    )
}

export default Logo