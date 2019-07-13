import React, { Component } from 'react';

import './Social.css';

export default class Social extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="header-wrap">
            
                    <div className="social">
                        <ul>
                            <li className="facebook">
                                <a href="www.facebook.com" target="_blank">FACEBOOK
                                <img src={require('./facebookreverse.png')} alt="FB"/>
                                </a>
                            </li>
                            <li className="twitter">
                                <a href="www.twitter.com" target="_blank">TWITTER
                                <img src={require('./TwitterBlack.png')} alt="Twitter"/>                                
                                </a>
                            </li>
                            <li className="instagram">
                                <a href="www.instagram.com" target="_blank">INSTAGRAM
                                <img src={require('./Instagram.png')} alt="Instagram"/>
                                </a>
                            </li>
                            <li className="contact">
                                <a href="w">CONTACT
                                <img src={require('./Mail.png')} alt="Contact"/>
                                </a>
                            </li>
                            
                            
                            
                           
                        </ul>
                    </div>
        
            </div>
                )
        }}
