import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="about-container">
      <hr />
      <h1>About</h1>
      <hr />
      <h2>WORK EXPERIENCE</h2>
      <h2>Cox Automotive</h2>
      <div className="date">08/2016-05/2017</div>
      <h3>Senior Full Stack Software Engineer & Machine Learning Engineer</h3>
      <ul>
        <li>
          Created machine learning and statistical modeling to predict
          probability of booking contracts and deploy machine learning model on
          AWS using Sage maker, Lambda, API gateway, and EC2
        </li>
        <li>
          Developed a machine learning model to classify vehicle images and
          auto-fill the form for customers using Pytorch with fast.ai techniques
          such as auto find learning rate, dynamic learning rate, different
          learning rate for each layer, freeze layers, precompute activation,
          and test time augmentation running on AWS P2 instance
        </li>
        <li>
          Designed internal React framework architecture to be able to consume
          and communicate between a separated self-contain application on
          private npm supporting Redux and Redux-saga
        </li>
        <li>
          Refactored the profitable legacy application by decoupling data
          pipeline and the view components by running a new architecture in
          parallel without server downtime
        </li>
        <li>
          Guided engineers to follow team design pattern and company
          architecture
        </li>
        <li>
          Implemented continuous integration using Jenkins for automating the
          deployment
        </li>
        <li>
          Developed Digital Showroom web application to facilitate customers to
          finish all paperwork online
        </li>
      </ul>
      <h2>Stevens Institute of Technology, Hoboken, New Jersey</h2>
      <div className="date">01/2016-05/2017</div>
      <h3>Research Assistant</h3>
      <b>Research Interests:</b> Reinforcement Learning and Computer Vision
      <ul>
        <li>
          Researched on deep reinforcement learning focusing on minimizing agent
          experiences method
        </li>
        <li>
          Implemented Face Recognition and Object Detection algorithm for
          machine vision using FaceNet and YOLO
        </li>
        <li>
          Developed centralized robotic control platform to support physical
          robots with video streaming using WebRTC, Opencv, ROS, Turtlebot,
          Raspberry Pi, and Gazebo Simulation
        </li>
      </ul>
      <hr className="item-split" />
      <h2>Area80 Co., Ltd, Bangkok, Thailand</h2>
      <div className="date">04/2011–02/2015</div>
      <h3>Senior Full Stack Software Engineer</h3>
      <ul>
        <li>
          Designed software architecture using MVC, Universal Javascript, Server
          Rendering (Isomorphic), Load Balancing, Cluster, Static Cache Files,
          TDD, and DevOps
        </li>
        <li>
          Developed front-end, back-end websites and embedded system using HTML,
          Javascript, AS3, PHP, MySql, Node.js, MongoDB, and Arduino such as
          CMSs, websites, game applications, motion detection, augmented
          reality, kinect, Wii gun, face detection, and sound recording
        </li>
        <li>
          Created mobile game application using Adobe Air for Android and iOS
        </li>
        <li>
          Designed back-end architecture using Codeigniter for PHP and designed
          company’s MVC front-end framework to offer the best user experience
          (UX)
        </li>
      </ul>
      <hr className="item-split" />
      <h2>Design Sundae Co., Ltd, Bangkok, Thailand</h2>
      <div className="date">12/2010–03/2011</div>
      <h3>Web Developer</h3>
      <ul>
        <li>
          Developed interactive websites and games using AS3, HTML, Javascript,
          and PHP
        </li>
        <li>Created animation using Adobe Flash, Illustrator, and Photoshop</li>
      </ul>
      <hr className="item-split" />
      <h2>Global Wireless Co., Ltd, Bangkok, Thailand </h2>
      <div className="date">06/2008–11/2010</div>
      <h3>Front-end Leader</h3>
      <ul>
        <li>
          Developed e-learning framework support real-time video streaming,
          interactive games and exams
        </li>
        <li>
          Managed work-flow and program structure of animation and programming
          in Agile team
        </li>
      </ul>
      <hr className="item-split" />
      <h2>Progaming Co., Ltd</h2>
      <div className="date">03/2011–12/2013</div>
      <ul>
        <li>Taught “Fundamental Action Script 3” course</li>
      </ul>
      <hr className="main-split" />
      <h2>EDUCATION</h2>
      <div className="date">May 2017</div>
      <h4>Stevens Institute of Technology, Hoboken, New Jersey</h4>
      Master of Science in Software Engineering
      <hr className="item-split" />
      <h4>
        Sirindhorn International Institute of Technology, Bangkok, Thailand
      </h4>
      <div className="date">April 2008</div>
      Bachelor of Engineer in Telecommunication Engineering
    </div>
  );
};
export default About;
