import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const Messages = () => {
  const Auth = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(-1);

  const showModal = i => {
    setShow(true);
  };

  const hideModal = () => {
    window.scrollTo(0, 0);
    setShow(false);
  };

  useEffect(() => {
    const getDonorsList = async () => {
      try {
        const response = await apiService.messages({
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setMessages(response.messages);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    getDonorsList();
  }, [Auth]);

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="p-3">MESSAGE</h2>
            {messages.length > 0 ? (
              current >= 0 ? (
                <div>
                  <span style={{ color: "gray", fontSize: "14px" }}>
                    Message:{" "}
                  </span>

                  {messages[current].message}
                </div>
              ) : null
            ) : null}
          </div>
        </div>
      </Modal>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 mt-4 mb-4 abtmain">
            <p>
              <Link to="/admin"> Dashboard</Link> > Messages
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped table-responsive">
              <thead className="table-danger">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.length !== 0 ? (
                  messages.map((message, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{message.name}</td>
                        <td>{message.phone}</td>
                        <td>{message.email}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            View Message
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No messages found</h3>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
