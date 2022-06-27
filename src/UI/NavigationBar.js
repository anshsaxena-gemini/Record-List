import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <div>
    
        <nav className="navbar navbar-expand-lg bg-primary navbar-light">
  <ul className={`navbar-nav ${styles.list}`} >
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