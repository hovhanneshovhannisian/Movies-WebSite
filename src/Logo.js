import React, { useContext } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import { RiMovie2Line } from 'react-icons/ri'
import { GlobalContext } from './context/GlobalState'
import './MoviesComponents/Movies.css'
import { Link } from 'react-router-dom'

function Logo() {

    const { watchList } = useContext(GlobalContext)

    return (
        <div className='header'>
            <Link to=''>
                <div className='logo'>
                    <BiCameraMovie className='logo-icon' />
                    <h2>Trailers.</h2>
                </div>
            </Link>
            <Link to="/watch-list">
                <div className='watchlist' >
                    <p>{watchList.length}</p>
                    <RiMovie2Line />
                </div>
            </Link>
        </div>
    )
}

export default Logo