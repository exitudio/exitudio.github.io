import React from 'react'
import ReactDom from 'react-dom'
import './Skill.scss'
import {Motion, spring} from 'react-motion'

import ExitMagnifier from '../../libs/ExitMagnifier'
import {setDivTransition,getDivCenter} from '../../libs/VanillaJsCss'
import skillDatas from '../../data/SkillDatas'

import {isMobileOrTablet} from '../../libs/CheckBrowser'
import FPS from '../../libs/FPS'


export default class Skill extends React.Component{
    childrendData = []
    exitMagnifier = new ExitMagnifier()

    constructor (props) {
        super(props)
        this.animateTimeout = []
        skillDatas.forEach((skillData,i)=>{
            this.childrendData.push({...skillData})
        })
    }

    childSetXYScale(_childData){
        _childData.child.style.WebkitTransform = `translate3d( ${ _childData.x }px, ${ _childData.y}px, 0)`
        _childData.child.style.MsTransform     = `scale(${ _childData.scale},${ _childData.scale})` /* IE 9 */
        _childData.child.style.WebkitTransform = `scale(${ _childData.scale},${ _childData.scale})` /* Safari */
        _childData.child.style.transform       = `scale(${ _childData.scale},${ _childData.scale}) translate3d( ${_childData.x}px, ${_childData.y}px, 0)`
    }

    componentWillUnmount=()=>{
        for(let i=0; i<this.animateTimeout.length; i++){
            clearTimeout(this.animateTimeout[i])
        }
    }
    
    componentDidMount = ()=>{
        var containerCenterPosition = getDivCenter(this.container)
        this.childrendData.forEach((_childData,i)=>{
            let timeoutId = setTimeout( ()=>{
                // set transition
                setDivTransition(_childData.child)
                setDivTransition(_childData.imageChild)
                setDivTransition(_childData.textChild)
                // set alpha (alpha will use only once)
                _childData.child.style.opacity          = 1
                _childData.child.style.alpha            = 1
                //set position and scale
                _childData.x = 0
                _childData.y = 0
                _childData.scale = 1
                this.childSetXYScale(_childData)
            }, i*20)
            this.animateTimeout.push(timeoutId)

            // set original position & scale
            var position = getDivCenter(_childData.child)
            var diffX = containerCenterPosition.x-position.x
            var directionX = diffX>0 ? -1 : 1
            var diffY = containerCenterPosition.y-position.y
            var directionY = diffY>0 ? -1 : 1
            _childData.x = directionX*(Math.abs(diffX) * 2 )
            _childData.y = directionY*(Math.abs(diffY) * 2 )
            _childData.scale = 5
            this.childSetXYScale(_childData)
            _childData.child.addEventListener("click", this.onMouseEnterAndClickItem.bind(this,_childData)) 
            if( !window.isMobileOrTablet ){
                _childData.child.addEventListener("mouseenter", this.onMouseEnterAndClickItem.bind(this,_childData)) 
                _childData.child.addEventListener("mouseleave", this.onMouseLeaveItem.bind(this,_childData)) 
            }
        })

    }

    onMouseEnterAndClickItem(_childData,e){
        if( this.lastChildrenData === _childData){
            window.open( _childData.link, '_blank')
        }else{
            //switch to image
            // _childData.imageChild.style.display = "block"
            // _childData.textChild.style.display  = "none"
            _childData.imageChild.style.opacity = 1
            _childData.textChild.style.opacity  = 0
            if(this.lastChildrenData != undefined)
                this.onMouseLeaveItem(this.lastChildrenData)

            //animate
            var position = getDivCenter(_childData.child)
            this.animateItemsAt(position.x,position.y)

            //load image
            _childData.child.getElementsByClassName("skill-image")[0].src = _childData.imageUrl
        }
        this.lastChildrenData = _childData
    }
    onMouseLeaveItem(_childData,e){
        // _childData.imageChild.style.display = "none"
        // _childData.textChild.style.display  = "block"
        _childData.imageChild.style.opacity = 0
        _childData.textChild.style.opacity  = 1
        this.lastChildrenData = null
    }
    onMouseLeave = (e)=>{
        console.log("leave")
        this.childrendData.forEach( (_childData,i)=>{
            _childData.x = 0
            _childData.y = 0
            _childData.scale = 1
            this.childSetXYScale( _childData )
        })
    }

    animateItemsAt = (_x,_y)=>{
        this.childrendData.forEach( (_childData,i)=>{
            var position = getDivCenter(_childData.child)
            var animationObject = this.exitMagnifier.getPositionAndScale( position.x,position.y, _x, _y ,i)
            if( animationObject.isInRadius ){
                _childData.scale = .8 + (1-animationObject.extraScale)*1
                _childData.imageChild.style.display = "block"
                // _childData.textChild.style.display  = "block"  
            }else{
                _childData.imageChild.style.display = "none"
                // _childData.textChild.style.display  = "block"  
                _childData.scale = .8
            }
            _childData.x = animationObject.x
            _childData.y = animationObject.y
            this.childSetXYScale(_childData)
        })
    }

    getBackgroundColorStyle(color){
        if(color){
            return {backgroundColor:color}
        }else{
            return {}
        }
    }

    render(){
        return (
            <div ref={child=>this.container=child} className="container" >
                <hr/>
                <h1>Skills</h1>
                <hr/>
                <div id="skill-contaner" className="skill-container" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {/*<div className="row">*/}
                    {
                        this.childrendData.map((childData,i)=>{
                            return <div ref={(child)=>{ childData.child=child }} style={{opacity:0}} className="skill-item-container" key={i}>
                                        <div className="skill-image-wrapper" >
                                            <img ref={(child)=>{ childData.imageChild=child }} style={this.getBackgroundColorStyle(childData.backgroundColor)} className="skill-image" />
                                            <div ref={(child)=>{ childData.textChild=child }} className="skill-text">{childData.description}</div>
                                        </div>
                                    </div>                  
                        })
                    }
                    {/*</div>*/}
                   
                </div>
            </div>
        )
    }
}
