import React, { Component } from 'react';
import logo from "../../assets/images/Ellipse.png"
import "./style.css";

class Team extends Component {
    state = {  }
    render() { 
        return ( <div className="team">
        <div className="container mt-5">
            <p className="abt"
                style={{color: 'rgba(213, 8, 8, 0.8)', padding: 0, margin: 0}}>
                Our Team</p>
            <div className="row mt-4">
                <div className="col-lg-4 mb-4">
                    <div className="card team-card">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-3">
                                <img className="thumb" width="100%" src={logo} alt="steve jobs"/>
                            </div>
                            <div className="col-lg-9 col-md-9 col-9 text-center" style={{marginTop: 12}}>
                                <span className="name" style={{fontSize: 20}}>Akash Garg</span>
                                <br/>
                                <span className="name">President</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="card team-card">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-3">
                                <img className="thumb" width="100%" src={logo} alt="steve jobs"/>
                            </div>
                            <div className="col-lg-9 col-md-9 col-9 text-center" style={{marginTop: 12}}>
                                <span className="name" style={{fontSize: 20}}>Akash Garg</span>
                                <br/>
                                <span className="name">President</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="card team-card">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-3">
                                <img className="thumb" width="100%" src={logo} alt="steve jobs"/>
                            </div>
                            <div className="col-lg-9 col-md-9 col-9 text-center" style={{marginTop: 12}}>
                                <span className="name" style={{fontSize: 20}}>Akash Garg</span>
                                <br/>
                                <span className="name">President</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div> );
    }
}
 
export default Team;