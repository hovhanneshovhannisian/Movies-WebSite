import React, { useContext } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import { RiMovie2Line } from 'react-icons/ri'
import { GlobalContext } from './context/GlobalState'
import './MoviesComponents/Movies.css'
import { Link } from 'react-router-dom'
import { Link as LinkForScroll } from 'react-scroll'

function Header() {

    const { watchList } = useContext(GlobalContext)

    console.log(watchList.length);

    return (
        <div className='header'>
            <Link to=''>
                <div className='logo'>
                    <BiCameraMovie className='logo-icon' />
                    <h2>Trailers.</h2>
                </div>
            </Link>
            
            <LinkForScroll to='singl' smooth={true}>
                <Link to="/watch-list">
                    <div className='watchlist' >
                        <p>{watchList.length}</p>
                        <RiMovie2Line />
                    </div>
                </Link>
            </LinkForScroll>
        </div>
    )
}

export default Header