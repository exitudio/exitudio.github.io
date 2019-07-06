import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import store from "./store"
import { Provider } from "react-redux"
import Async from 'react-code-splitting'

import Layout from './components/main/Layout'

const AsyncProjects = () => <Async load={import(/* webpackChunkName: "Projects" */ './components/projects/Projects')} />
const AsyncAbout = () => <Async load={import(/* webpackChunkName: "About" */ './components/about/About')} />
const AsyncContact = () => <Async load={import(/* webpackChunkName: "Contact" */ './components/contact/Contact')} />
const AsyncSkills = () => <Async load={import(/* webpackChunkName: "Skill" */ './components/skills/Skills')} />


const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={AsyncSkills} />
        <Route path="/skills" name="skills" component={AsyncSkills}></Route>
        <Route exact path="/projects" component={AsyncProjects} />
        <Route path="/about" name="about" component={AsyncAbout}></Route>
        <Route path="/contact" name="contact" component={AsyncContact}></Route>
      </Layout>
    </BrowserRouter>
  </Provider>,
  app)