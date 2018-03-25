import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => 

<div>

	<label>
	  <input type='checkbox' />

	  <span className='menu'>
	    <span className='hamburger'></span>
	  </span>

	  <ul>
	    <li>
	      <Link to='/'>Home</Link>
	    </li>
	    <li>
	      <Link to='/work'>Work</Link>
	    </li>
	    <li>
	      <Link to='/contact'>Contact</Link>
	    </li>
	  </ul>

	</label>

</div>

export default Navbar