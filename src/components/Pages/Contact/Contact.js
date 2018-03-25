import React, { Component } from 'react'
import './Contact.css'

import github2 from './github2.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'

class Contact extends Component {


	render(){

		return(
			<div>
				<div className="social">
					<ul className="social">
						<li><a href="#"><img src={github2} width="100" height="100" /></a></li>
						<li><a href="#"><img src={instagram} width="90" height="90" /></a></li>
						<li><a href="#"><img src={linkedin} width="100" height="100" /></a></li>
					</ul>
				</div>

				<div className="container">
					<h2>REACH ME HERE</h2>
					<form>
					  <div className="row">
						  <div className="col-md-6 multi-horizontal">
						    <label for="name">First Name</label><br />
						    <input type="text" id="name" name="name" placeholder="What is your name..." /><br />
						  </div>

						  <div className="col-md-6 multi-horizontal">
						    <label for="email">Email</label><br />
						    <input type="text" id="email" name="email" placeholder="What is your email address..." /><br />
						  </div>
					  </div>

					    <label for="subject">Message</label><br />
					    <textarea id="message" name="message" placeholder="What do you want to talk about..."></textarea><br />

					    <input type="submit" value="SEND FORM" />
					  </form>
				</div>

			</div>
		)
	}
}

export default Contact