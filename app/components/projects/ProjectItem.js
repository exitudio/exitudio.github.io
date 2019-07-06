import React from 'react'
import ReactDom from 'react-dom'

import store from "../../store"
import {PROJECT,GROUP} from "../../store"
import {selectProject} from '../../actions/projectAction'

export default class ProjectItem extends React.Component{
    constructor (props) {
        super(props)
        this.isPlayVideo = false
        this.isForceOpenNewTab = false
        this.isNeedImageSrc = false
        this.link = this.props.link
        if( this.link.indexOf("youtube")==-1 ){
            this.isForceOpenNewTab = true
        }else{
            this.link += '?autoplay=1'
        }

        store.subscribe(this.updatedItem)
    }

    componentDidMount(){
        this.updatedItem()
    }

    updatedItem=()=>{
        let storeState = store.getState()
        let isStorePlayVideo = storeState.projectGroup[this.props.groupId].data[this.props.projectId]
        if( this.isForceOpenNewTab ){
            //check if website & store isOpen & reducer fired for project
            if(isStorePlayVideo && storeState.stateUpdateType === PROJECT){
                window.open(this.link,'_blank')
            }
            this.isPlayVideo = isStorePlayVideo
        }else{
            if( !this.isPlayVideo  && isStorePlayVideo ){
                this.playVideo()
            }else if( this.isPlayVideo  && !isStorePlayVideo ){
                this.stopVideo()
            }
        }

        let isStateOpen = store.getState().projectGroup[this.props.groupId].isOpen
        if( isStateOpen && this.imageChild){
            this.imageChild.src = this.props.image
        }
    }

    playVideo=()=>{
        this.isPlayVideo = true
        this.forceUpdate()
    }
    stopVideo=()=>{
        this.isPlayVideo = false
        this.forceUpdate()
        this.isNeedImageSrc = true
    }
    
    onClick=()=>{
        store.dispatch( selectProject(this.props.groupId,this.props.projectId) )
    }
    render(){
        let displayDiv
        //href={this.link} 
        if(this.isPlayVideo){
            displayDiv = <iframe className="video" src={ this.link} frameBorder={0} allowFullScreen='allowFullScreen' />
        }else{
            displayDiv = <div className="video" onClick={this.onClick} style={{backgroundColor:"#000"}}>
                            <img ref={child=>this.imageChild=child}  src={ this.isNeedImageSrc ? this.props.image : ""} className="image"/>
                        </div>
        }
        return <div className="port-item">
                    {displayDiv}
                    <div className="description">{ this.props.name}</div>
                </div>
    }
}