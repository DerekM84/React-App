import React, { Component } from 'react';
import './Adaptive.css';

export default class Adaptive extends Component {

    constructor() {
        super();
        this.state = {
            clicked: "mobile",
            panel: "",
    
        };
    }

    render() {

        
        var panel = (this.state.panel);
        

        return (
            <div className="mobile-app">
                <div className="mobile-social-bar">
                    <a href="facebook" target="_blank"><p>FACEBOOK</p><img src={require('../Social/facebookreverse.png')} alt="error"/></a>
                    <a href="instagram" target="_blank"><p>INSTAGRAM</p><img src={require('../Social/Instagram.png')} alt="error"/></a>
                    <a href="twitter"target="_blank"><p>TWITTER</p><img src={require('../Social/TwitterBlack.png')} alt="error"/></a>
                </div>
                <div className="mobile-logo">
                    <div className="mobile-center">
                    <p>Massage Brand Name</p>
                    </div>
                </div>
                <div className="mobile-navbar">
                    
                    <div className="mobile-contact" onClick={() => {
                        this.setState({panel: <div className="contact-panel"><br></br><span>Contact Information:</span><br/><br/>Cell: (480) 555-5555<br/><br/> Email: emailaddress@email.com <br/>
                    </div>})}}><img src={require('../Social/Mail.png')} alt="error"/></div>
                    
                    <div></div>
        
                </div>
                
                
                <div className="mobile-panel-container">
                    <div className="mobile-panel">{panel}</div>
                </div>
                <div className="mobile-map" onClick={() => {
                    this.setState({ 
                    panel: <div className="map-panel"><br></br><a className="address-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/33.2792079,-111.5932974/Corporate+Center+at+Val+Vista,+3707+E+Southern+Ave,+Mesa,+AZ+85206/@33.3349928,-111.7436198,12z/data=!3m1!4b1!4m16!1m6!3m5!1s0x872baf37228b5a89:0x61e7e34692f377c3!2sCorporate+Center+at+Val+Vista!8m2!3d33.3925584!4d-111.7513947!4m8!1m1!4e1!1m5!1m1!1s0x872baf37228b5a89:0x61e7e34692f377c3!2m2!1d-111.7513947!2d33.3925584" alt="error">3707 E Southern Ave, Mesa, AZ 85206</a><br/><br/><span> The treatment room is located in Mesa at the corner of Val Vista and Southern.</span></div>})
                }}><h3>Map</h3></div>
                <div className="mobile-booking" onClick={() => {
                    this.setState({ panel: "scheduling clicked"})
                }}><h3>Scheduling</h3></div>
            </div>
            
        );
    }
}
