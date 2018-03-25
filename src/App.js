import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home1 from './components/Pages/Home/Home1'
import Work from './components/Pages/Work/Work'
import Contact from './components/Pages/Contact/Contact'

class App extends Component {
  render() {
    return (
    <Router>
	    <div className="App">

	     <Navbar />

	   	 <Route exact path='/' component={Home1} />
	   	 <Route path='/work' component={Work} />
	   	 <Route path='/contact' component={Contact} />

	  	</div>
    </Router>
    );
  }
}

export default App;
