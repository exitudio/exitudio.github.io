import React from 'react'
import './About.scss'
const About = ()=>{
    return(
        <div className='about-container'>
<hr/>
<h1>About</h1>
<hr/>
<h2>WORK EXPERIENCE</h2>
<h2>Stevens Institute of Technology, Hoboken, New Jersey</h2>	                          
<div className="date">08/2016-05/2017</div>
<h3>Senior Full Stack Developer</h3>
<ul>
    <li>Developed centralized robotic control platform to support physical robots with video streaming using WebRTC, Opencv, ROS, Turtlebot, Arduino, and Gazebo Simulation</li>
    <li>Created website and Android app to view video streaming and control robots over IP in real-time</li>
    <li>Developed school’s marketplace website and mobile application using Node.js, React, React Native Redux, Graphql, Mocha, Chai, Jest, and Java (Android)</li>
    <li>Designed software architecture from backend through frontend based on Client/Server Rendering, Universal Javascript, JSON Web Token and Immutable State, also optimize connection with graphql</li>
</ul>
<hr className="item-split"/>


<h2>Area80 Co., Ltd, Bangkok, Thailand</h2>	
<div className="date">04/2011–02/2015</div>
<h3>Senior Full Stack Developer</h3>
<ul>
    <li>Designed software architecture using MVC, Universal Javascript, Server Rendering (Isomorphic), Load Balancing, Cluster, Static Cache Files, TDD, and DevOps</li>
    <li>Developed front-end, back-end websites and embedded system using HTML, Javascript, AS3, PHP, MySql, Node.js, MongoDB, and Arduino such as CMSs, websites, game applications, motion detection, augmented reality, kinect, Wii gun, face detection, and sound recording</li>
    <li>Created mobile game application using Adobe Air for Android and iOS</li>
    <li>Designed back-end architecture using Codeigniter for PHP and designed company’s MVC front-end framework to offer the best user experience (UX)</li>
</ul>
<hr className="item-split"/>

<h2>Design Sundae Co., Ltd, Bangkok, Thailand</h2>	
<div className="date">12/2010–03/2011</div>
<h3>Web Developer</h3>
<ul>
    <li>Developed interactive websites and games using AS3, HTML, Javascript, and PHP</li>
    <li>Created animation using Adobe Flash, Illustrator, and Photoshop</li>
</ul>
<hr className="item-split"/>
		
<h2>Global Wireless Co., Ltd, Bangkok, Thailand	</h2>
<div className="date">06/2008–11/2010</div>
<h3>Front-end Leader</h3>
<ul>
    <li>Developed e-learning framework support real-time video streaming, interactive games and exams</li>
    <li>Managed work-flow and program structure of animation and programming in Agile team</li>
</ul>
<hr className="item-split"/>

<h2>Progaming Co., Ltd</h2>
<div className="date">03/2011–12/2013</div>
<ul>
    <li>“Advance Programming AS3” Instructor.</li>
</ul>

<hr className="main-split"/>
<h2>EDUCATION</h2>
<div className="date">Expected May 2017</div>
<h4>Stevens Institute of Technology, Hoboken, New Jersey</h4>
Master of Science in Software Engineering
<hr className="item-split"/>

<h4>Sirindhorn International Institute of Technology, Bangkok, Thailand</h4>
<div className="date">April 2008</div>
Bachelor of Engineer in Telecommunication Engineering
</div>


    )
}
export default About