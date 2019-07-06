import React from 'react'
import ContactScss from './contact.scss'

const Contact = ()=>{
    return(
    <div className="container">
        <div className="contact-container">
            <hr/>
            <h1>Contact</h1>
            <hr/>
            <div className="contact-table">
                <div className="col-33">
                    <h2>Name</h2>
                    Ekkasit Pinyoanuntapong
                </div>
                <div className="col-33">
                    <h2>Email</h2>
                    exitudio@gmail.com, epinyoan@stevens.edu
                </div>
                <div className="col-33">
                    <h2>Mobile</h2>
                    908-421-4335
                </div>
            </div>
            <hr/>
            <form style={{opacity:.3}}>
            <div className="contact-table">
                <hr/>   
                <h1>Coming Soon...</h1>
                <hr/>   
                <div className="col-50">
                    <div className="item-wrapper">
                        <h4 className="head-text">Name*</h4>
                        <input className="input-text-style input-small" type="text"/>
                    </div>
                    <div className="item-wrapper">
                        <h4 className="head-text">Email*</h4>
                        <input className="input-text-style input-small" type="text"/>
                    </div>
                </div>
                <div className="col-50">
                    <h4 className="head-text">Message*</h4>
                    <textarea className="input-text-style input-large " type="text"/>
                    <button className="send-button" type="submit" value="Submit">Submit</button>
                </div>
            </div>  
            </form>
        </div>
    </div>)
}
export default Contact