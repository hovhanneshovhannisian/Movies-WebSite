import React from 'react'
import './App.css'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    
    return (
    <footer className='footer'>
        <div className='info'>
        <p>Made By Hovhannes Hovhannisyan</p>
        <p>{year} | All Rights NOT Reserved</p>
        </div>
    </footer>
  )
}

export default Footer