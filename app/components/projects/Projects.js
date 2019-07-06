import React from 'react'
import ReactDom from 'react-dom'


import ProjectGroup from './ProjectGroup'
import './Projects.scss'
import ProjectsData from '../../data/ProjectsData'
import store from "../../store"
import {toggleGroup} from '../../actions/projectAction'


export default class Projects extends React.Component{
    constructor (props) {
        super(props)
        
    }
    componentDidMount(){
        // store.dispatch(toggleGroup(0))
    }
    render(){
        var count =-1
        return(
            <div className="container">
                <hr/>
                <h1>Projects</h1>
                <hr/>
                <div className="port-wrapper" onMouseEnter={this.onMouseEnter}>
                    {
                        ProjectsData.map( (projectTypeData,i)=>{
                            return <ProjectGroup key={i} projectTypeData={projectTypeData} groupId={i} ></ProjectGroup>
                        })
                    }
                </div>
            </div>
        )
    }
}