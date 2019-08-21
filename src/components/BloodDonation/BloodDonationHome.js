import React, { Component } from "react";

class BloodDonationHome extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="abtmain mt-5">
          <p>Blood Donation Portal</p>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <a href="/register-as-donor" className="card">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuTLRFvR5jmE8_Xr0G6VQ7yJz3tihHbxw_XkqVppqkD63LOG53Q"
                width="100%"
              /> */}
              <div className="pt-2"><h4 style={{textAlign: 'center', color: "white", fontWeight: 700}}>Register as a Donor</h4></div>
            </a>
          </div>

          <div className="col-lg-4 mt-4">
            <a href="/request-blood" className="card">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuTLRFvR5jmE8_Xr0G6VQ7yJz3tihHbxw_XkqVppqkD63LOG53Q"
                width="100%"
              /> */}
              <div className="pt-2"><h4 style={{textAlign: 'center', color: "white", fontWeight: 700}}>Request Blood</h4></div>
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default BloodDonationHome;
