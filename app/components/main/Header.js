import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'

import CollapseAnimateComponent from '../../libs/CollapseAnimateComponent';
import EXITImage from '../../images/exit.jpg'

export default class Header extends CollapseAnimateComponent{
    constructor (props) {
        super(props)
    }
    
    componentDidMount(){
        super.setCollapseElement(this.nav);
        super.componentDidMount();
        this.collapseButton.addEventListener("click",this.toggleCollpse);
    }

    render(){
        super.render();
        return(
        <div className="container">
            <div className="page-header">
                <div className="navbar-header">
                    <div className="t1">
                        <img className="brand-icon" src={EXITImage} />
                    </div>
                    {/*<a className="navbar-brand" href="#">EXIT</a>*/}
                    <button ref={(child)=>{this.collapseButton = child;}} type="button" className="hamburger-toggle collapsed">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <nav ref={(child)=>{this.nav = child;}} style={ this.animateStyle }  >
                    <ul className="navbar">
                        <li> <Link to="/skills">Skills</Link> </li>
                        <li> <Link to="/projects">Projects</Link> </li>
                        <li> <Link to="/about">About</Link> </li>                    
                    </ul>
                    <ul className="navbar navbar-right">
                        <li> <Link to="/contact">Contact</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
        );
    }
};