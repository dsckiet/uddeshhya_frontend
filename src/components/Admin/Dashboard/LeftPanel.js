import React, { Component } from 'react'
import "../style.css"

class LeftPanel extends Component {
    render(){
        return(
            <div className="panel-card">
                <ul className="panel-wrapper">
                    <li className="panel-option">
                        Dashboard
                    </li>
                    <li className="panel-option">
                        Donors
                    </li>
                    <li className="panel-option">
                        Blood Requests
                    </li>
                </ul>
            </div>
        );
    }
}

export default LeftPanel;