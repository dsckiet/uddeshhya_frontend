import React, { Component } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        return ( <div className="project">
        <div className="container mt-5">
            <p className="abt"
                style={{color: 'rgba(213, 8, 8, 0.8)', padding: 0, margin: 0}}>
                Our Projects</p>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="card card_img mb-4">
                    </div>
                    <p className="card_body crd mb-2">Glimpses from our Village School Project</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est, illum doloremque
                        voluptatibus dolore </p>
                </div>

                <div className="col-lg-4">
                    <div className="card card_img mb-4">
                    </div>
                    <p className="card_body crd mb-2">Glimpses from our Village School Project</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est, illum doloremque
                        voluptatibus dolore </p>
                </div>

                <div className="col-lg-4">
                    <div className="card card_img mb-4">
                    </div>
                    <p className="card_body crd mb-2">Glimpses from our Village School Project</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est, illum doloremque
                        voluptatibus dolore </p>
                </div>
            </div>
        </div>
    </div> );
    }
}
 
export default Projects;