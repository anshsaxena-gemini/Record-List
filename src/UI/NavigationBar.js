import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className='navigation'>
    
        <nav className="navbar navbar-expand-lg bg-primary navbar-light">
        <h2 className="navbar-title col-4 text-white">Record List</h2>
        
  <ul className="navbar-nav" >
    <li className="nav-item">
     <h5> <Link className='nav-link text-white' to='/'>  Create User</Link></h5>
    </li>
    <li className="nav-item">
    <h5><Link className='nav-link text-white' to='/ViewUser'>  View User</Link></h5>
    </li>
  
  </ul>
  
</nav>
    </div>

  )
}

export default NavigationBar