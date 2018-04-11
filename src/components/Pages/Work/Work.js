import React, { Component } from 'react'
import './Work.css'

class Work extends Component {
	render(){
		return(
			<div className="resume">
				<h2 className="sections">TECHNICAL SKILLS</h2>

				<p>Javascript, Node JS, React/React Native, MERN Stack, Redux, jQuery, Express, MySQL/Sequelize, MongoDB/Mongoose, Firebase, Handlebars, HTML/CSS, ES6, Python, Heroku</p>

				<h2 className="sections">PROJECTS</h2>
						
					<h4 className="projExp">Lumi | <span id="proj">Product Owner & Full Stack Engineer</span></h4>
					<p className="description">Social platform to allow users to find others of similar study subjects</p>
					<ul>
						<li>Created application using the MERN Stack</li>
						<li>Built RESTful APIs to gather locations and GPS signals</li>
						<li>Passport OAuth for seamless authentication</li>
						<li>Backend validation for a robust database and designed UX/UI interface</li>
					</ul>

					<h4 className="projExp">DoCat | <span id="proj">Product Owner & Full Stack Engineer</span></h4>
					<p className="description">Motivating todo application that grants you a kitty for each completed task</p>
					<ul>	
						<li>Created application using the MERN Stack</li>
						<li>Constructed user features: Twilio, task/db requests, timers, dates </li>
						<li>Passport OAuth for seamless authentication</li>
						<li>Backend validation for a robust database and designed UX/UI interface</li>
					</ul>

					<h4 className="projExp">EatMe | <span id="proj">Product Owner & FrontEnd Engineer</span></h4>
					<p className="description">Find your new love for food and recreate it yourself</p>
					<ul>
						<li>Created application using Javascript and Sequelize</li>
						<li>Passport authentication including Google, Facebook & Local</li>
						<li>Constructed user features: API request, add/delete</li>
						<li>Backend validation for a robust database and designed UX/UI interface</li>
					</ul>

				<h2 className="sections">EXPERIENCE</h2>

					<h4 className="jobExp">Sales Development Representative</h4>
					<p className="description">Highfive Technologies | Oct. 2017 - Present</p>

					<p>Q4 2017 - Highest Performing Outbound SDR<br />
					Q4 2017 Quota Attainment (Team) - 114%<br />
					Q4 2017 Quota Attainment (Individual) - 112%</p>
					<p>Q1 2018 - Promotion as Inbound SDR</p>

					<h4 className="jobExp">Assistant Store Manager</h4>
					<p className="description">UNIQLO | May 2015 - May 2017</p>
					<ul>
						<li>Met weekly sales target of over $100,000 a week and over 100% during holiday seasons </li>
						<li>Weekly sales analysis to enhance sales performance</li>
						<li>Conducted seasonal campaigns arrangements based on consumer research dedicated to our local location</li>
						<li>Maximized monthly budgets for campaign/sales materials</li>
						<li>Master of human relations – clients and team members </li>
						<li>Collaborated directly with regional managers to develop creative strategies to increase sales</li>
					</ul>

				<h2 className="sections">EDUCATION</h2>

					<h4 className="school">University of California, Santa Cruz</h4>
					<p className="schoolDetails">Global Economics - Marketing<br />
					Psychology<br/>
					Technology Information Systems<br />
					2010 - 2014</p>

					<h4 className="school">University of California, Berkeley </h4>
					<p className="schoolDetails">Extension Program<br />
					Computer Programming<br />
					2017 - 2018</p>
			</div>
		)
	}
}

export default Work