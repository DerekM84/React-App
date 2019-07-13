import React, { Component } from 'react';
import './Panel.css';

export default class Panel extends Component {

    constructor() {
        super();
        this.state = {
            showing: "news",
            showing1: "",
            showing2: "",
            showing3: "",
        };
    }

    toggleAppear = ()  => {
    
    }



    render() {

        var left = (this.state.showing1);
        var rightHeading = (this.state.showing2);
        var rightText = (this.state.showing3);

        return (
            <div className="whole-thing">
                <div className="panel-wrap">
                    <div className="intro-text"><span className="span">Therapeutic Massage </span> <br></br> by <br></br> <span className="span">Name</span></div>

                    <div className="panel">
                        <div className="panel-left">
                            <h5 ref="leftImage">{left} </h5>
                        </div>
                        <div className="panel-right">
                            <h2 ref="panelHeading">{rightHeading}</h2>
                            <p ref="textBody">{rightText}</p>
                        </div>
                    <div className="border"></div>
            </div>



                    <div className="navbar-wrap">
                        <div className="navbar">

                            <button className="news" onClick={() => {
                                this.setState({ showing: "news" });
                                this.setState({ showing1: <img src={require('./news2.jpg')} alt="error"/> });
                                this.setState({ showing2: "NEWS" });
                                this.setState({ showing3: "Lorem ipsum dolor amet" });
                            }} >News</button>
                            


                            <button className="services" onClick={() => {
                                this.setState({ showing: "services" });
                                this.setState({ showing1: <img src={require('./handsplatter.png')} alt="error"/>});
                                this.setState({ showing2: "Services"});
                                this.setState({ showing3: "List Services and Rates"});
                            }} >Services</button>
                            
                            
                            
                            
                            
                            <button className="scheduling" onClick={() => {
                                this.setState({ showing: "scheduling" });
                                this.setState({ showing1: <img src={require('./storefront.jpeg')} alt="error"/>});
                                this.setState({ showing2: "Schedule Now"});
                                this.setState({ showing3: "scheduling widget"});
                            }} >Scheduling </button>


                            <button className="location" onClick={() => {
                                this.setState({ showing: "location" });
                                this.setState({ showing1: "courtesy of google maps"});
                                this.setState({ showing2: "Location"});
                                this.setState({ showing3: <iframe title="Map to Office" src="./location.png" frameborder="2" ></iframe>});
                            }}>Location</button>

                            <button className="therapist" onClick={() => {
                                this.setState({ showing: "therapist" });
                                this.setState({ showing1: <img src={require('./blackgoldframe.png')} alt="error"/>});
                                this.setState({ showing2: "Therapist Profile"});
                                this.setState({ showing3: "About the therapist..."});
                            }}>Your Therapist</button>

                        </div>


                        <div className="footer-wrap">
                            <div className="footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
