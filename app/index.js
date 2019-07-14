import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import store from "./store"
import { Provider } from "react-redux"
import Async from 'react-code-splitting'

import Layout from './components/main/Layout'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Research from './components/research/Research'

// const AsyncProjects = () => <Async load={import(/* webpackChunkName: "Projects" */ './components/projects/Projects')} />
// const AsyncAbout = () => <Async load={import(/* webpackChunkName: "About" */ './components/about/About')} />
// const AsyncContact = () => <Async load={import(/* webpackChunkName: "Contact" */ './components/contact/Contact')} />
// const AsyncSkills = () => <Async load={import(/* webpackChunkName: "Skill" */ './components/skills/Skills')} />


const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Layout>
        <Route exact path="/" component={Research} />
        <Route path="/skills" name="skills" component={Skills}></Route>
        <Route exact path="/projects" component={Projects} />
        <Route path="/about" name="about" component={About}></Route>
        <Route path="/contact" name="contact" component={Contact}></Route>
        <Route path="/research" name="research" component={Research}></Route>
      </Layout>
    </HashRouter>
  </Provider>,
  app)