import React, { Component } from 'react';

import './Tabs.css';

export default class Tabs extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="tabs-wrap">
            
                    <div className="tabs">
                        <ul>
                            <li className="gift-cards">
                                <a href="www.facebook.com" target="_blank">
                                <img src={require('./gift-card.jpg')} alt="FB"/>GIFT CARDS
                                </a>
                            </li>
                            <li className="extra1">
                                <a href="www.twitter.com" target="_blank">
                                <img src={require('./dragon.png')} alt="Twitter"/>Extra1                             
                                </a>
                            </li>
                            <li className="extra2">
                                <a href="www.instagram.com" target="_blank">
                                <img src={require('./dragon2.png')} alt="Instagram"/>Extra2
                                </a>
                            </li>
                            <li className="extra3">
                                <a href="w">
                                <img src={require('./portraitborder.png')} alt="Contact"/>extra3
                                </a>
                            </li>
                            
                            
                            
                           
                        </ul>
                    </div>
        
            </div>
                )
        }}
