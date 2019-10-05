import React, { useState } from "react";
import * as apiService from "../../utils/Services";

const Contact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    let data = {
      name,
      phone,
      email,
      message
    };
    apiService
      .contact(data)
      .then(res => {
        setIsLoading(false);
        if (res.message === "success") {
          console.log(res);
          window.scrollTo(0, 0);
          props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err.response.data.message);
        setIsLoading(false);
        setApiMessage(err.response.data.message);
      });
  };
  return (
    <div className="container">
      <div className="abtmain mt-5">
        <p>Get in Touch</p>
      </div>

      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="card">
            <div className="main-box">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        className="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div className="col-lg-4 mt-3">
                      <label>Phone</label>
                      <input
                        onChange={e => setPhone(e.target.value)}
                        required
                        name="phone"
                        type="number"
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>

                    <div className="col-lg-4 mt-3">
                      <label>Email</label>
                      <input
                        onChange={e => setEmail(e.target.value)}
                        required
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        cols="30"
                        onChange={e => setMessage(e.target.value)}
                        required
                        rows="5"
                        placeholder="Message"
                      />
                    </div>
                    <div
                      className="col-lg-12 mt-4 mb-4"
                      style={{ display: "flex" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        Submit
                      </button>
                      {isLoading ? (
                        <div
                          className="ld ld-ring ld-spin"
                          style={{
                            marginLeft: 8,
                            alignSelf: "center",
                            width: "1.3em",
                            height: "1.3em"
                          }}
                        />
                      ) : null}
                    </div>
                    <div className="col-lg-12">
                      <h6>{apiMessage}</h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
