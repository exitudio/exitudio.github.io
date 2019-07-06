import React from 'react'
import ReactDom from 'react-dom'
import './Layout.scss'

import Header from './Header'

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}