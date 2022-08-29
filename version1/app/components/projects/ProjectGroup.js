import React from 'react'
import ReactDom from 'react-dom'
import CollapseAnimateComponent from '../../libs/CollapseAnimateComponent'
import ProjectItem from './ProjectItem'

import {toggleGroup} from '../../actions/projectAction'
import {connect} from 'react-redux'
import store from "../../store"
import {GROUP} from "../../store"

class ProjectGroup extends CollapseAnimateComponent{
    componentDidMount(){
        super.setCollapseElement(this.projectGroup)
        super.componentDidMount()
        // this.unsubscribe = store.subscribe(this.updatedStore)
        this.updatedStore()
    }
    componentWillReceiveProps(nextProps){
        console.log('change')
        this.updatedStore()
    }
    componentWillUnmount(){
        super.componentWillUnmount()
        // this.unsubscribe()
    }
    get moreSign(){
        if( this.state.collapseState === CollapseAnimateComponent.CLOSED || this.state.collapseState === CollapseAnimateComponent.CLOSING ){
            return "+"
        }
        return "-"
    }
    tellGroupAmPlaying=(_item)=>{
        if(this.lastItem){
            this.lastItem.stopPlayVideo()
        }
        this.lastItem = _item
    }
    toggleGroup=()=>{
        store.dispatch(toggleGroup(this.props.groupId))
    }
    updatedStore=()=>{
        let isStateOpen = store.getState().projectGroup[this.props.groupId].isOpen
        if( store.getState().stateUpdateType === GROUP || store.getState().stateUpdateType===undefined){
            if( isStateOpen &&
                (
                    this.state.collapseState===CollapseAnimateComponent.CLOSED ||
                    this.state.collapseState===CollapseAnimateComponent.CLOSING
                )){
                this.setState({collapseState:CollapseAnimateComponent.OPENING})
            }else if( !isStateOpen && 
                        this.state.collapseState===CollapseAnimateComponent.OPEN || 
                        this.state.collapseState===CollapseAnimateComponent.OPENING 
                        ){
                this.setState({collapseState:CollapseAnimateComponent.CLOSING})
            }
        }
    }
    render(){
        return <div className="group-wrapper">
                    <a onClick={this.toggleGroup} style={{cursor:"pointer",width:"100%",display:"block"}}>
                        <h2 style={{display:"inline"}}>{this.props.projectTypeData.type}</h2><div className="more-less-text">{this.moreSign}</div>
                    </a>
                    <div ref={(child)=>{this.projectGroup=child}} style={ this.animateStyle } className="project-group">
                        {this.props.projectTypeData.data.map((project,i)=>{
                                let link = project.link.split('watch?')[1]
                                return <ProjectItem {...project} projectId={i} groupId={this.props.groupId} key={i}/>
                            }
                        )}
                    </div>
                </div>
    }
}

const stateToProps = (state)=>{
    console.log(state)
    return state
}
export default connect(stateToProps)(ProjectGroup)