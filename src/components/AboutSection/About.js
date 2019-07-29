import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( <div className="container">
        <div className="abtmain mt-5">
            <p>About Uddeshhya</p>
        </div>
        <span><strong>Registered under Society Acts 1860</strong></span>
        <p><strong>Registration No : 1719/2017-18</strong></p>
        <p>On 4th Oct 2010, Uddeshhya was founded by highly motivated students of
            K.I.E.T to provide a helping hand to deprived individuals. Our college K.I.E.T has been supportive
            of our work for the upliftment of society. Uddeshhya envisions a
            society where everyone lives with basic necessities and helps students of the institute into people
            who understand that happiness lies in sharing and living for others. K.I.E.T provides every form of
            help to its various project. As
            Pablo Picasso said “The meaning of life is to find your gift. The purpose of life is to give it
            away. What can be a better certificate than being the reason for someone else’s happiness." We
            welcome all willing institutes to collaborate
            with us. Every possible help and guidance shall be given to institutes who want to establish an
            Uddeshhya chapter in their campus. The team is now registered as an NGO under society welfares acts
            1860 with registration number as 1719/2017-18.
        </p>
        <div className="row pt-2">
            <div className="col-lg-3 mb-4">
                <div className="card card-about">
                    <span className="abt">8</span>
                    <span className="number">Running project</span>
                </div>
            </div>
            <div className="col-lg-3 mb-4">
                <div className="card card-about">
                    <span className="abt">4</span>
                    <span className="number">Village Schools</span>
                </div>
            </div>
            <div className="col-lg-3 mb-4">
                <div className="card card-about">
                    <span className="abt">256</span>
                    <span className="number">Night School Students</span>
                </div>
            </div>
            <div className="col-lg-3 mb-4">
                <div className="card card-about">
                    <span className="abt">280</span>
                    <span className="number">Students in Slums Schools</span>
                </div>
            </div>
        </div>
    </div> );
    }
}
 
export default About;