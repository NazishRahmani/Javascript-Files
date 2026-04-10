import React from 'react'
import {NavLink} from 'react-router-dom';
const Home = () => {
  return (
    <div><h2>Home</h2>
     <NavLink to={'/About'}>About</NavLink>
    </div>
    
  )
}

export default Home