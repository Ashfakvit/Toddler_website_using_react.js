import React from 'react'
import './Health.css'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'

export const Health = () => {

  return (
    <div className="navbar">
      <Header />
      <div className="body" >
        <div className="box">
        <Link to="/Vitamins" className='links'>Vitamins</Link><br></br>
        <Link to="/vegetables" className='links' >Vegetables</Link><br></br>
        <Link to="/Eating" className='links'> Eating</Link>  
        
          <ul>
            <li>ashfak</li>
          </ul>

        </div>
        
        </div>
        </div>
  )
}

export default Health