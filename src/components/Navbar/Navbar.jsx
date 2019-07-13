import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    
    render() {
        return (
            <div className="navbar-wrap">
                <div className="navbar">
                    <button onClick={this.props.bodyworkClicked()}  className="bodywork">Bodywork</button>
                    <button onClick={this.props.energeticClicked()} className="energetic">Energetic Therapy</button>
                    <button className="nav-button3">Scheduling</button>
                    <button className="nav-button4">Office Location</button>
                    <button className="nav-button5">Your Therapist</button>
                </div>
                <div className="footer-wrap">
                    <div className="footer">
                    </div>                
                </div>
            </div>
            
        );
    }
}