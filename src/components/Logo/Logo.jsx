import React, { Component } from 'react';

import './Logo.css';

export default class Logo extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="logo-wrap">

                <div className="logo">
                    <img className="heart" src={require("./redheart.png")} alt="redheart" />
                        <p>ASSAGE BY </p>
                    <img className="heart" src={require("./redheart.png")} alt="redheart" />
                        <p>AYA</p>
                </div>

            </div>
        )                
        }
}
