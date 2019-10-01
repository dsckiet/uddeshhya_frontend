import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";
import "../style.css";

const MoneyDonations = () => {
  const Auth = useContext(AuthContext);

  const [donations, setDonations] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
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
        const response = await apiService.moneyDonations({
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setDonations(response.donations);
        setTotalCharges(response.totalCharges);
        setTotalDonationAmount(response.totalDonationAmount);
        setTotalAmount(response.totalAmount);
        setTotalDonations(response.totalDonations);
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
            <h2>Donation Details</h2>
            {donations.length > 0 ? (
              current >= 0 ? (
                <>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Email:{" "}
                    </span>

                    {donations[current].email}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Address:{" "}
                    </span>
                    {donations[current].address}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Message:{" "}
                    </span>
                    {donations[current].message}
                  </div>
                </>
              ) : null
            ) : null}
          </div>
        </div>
      </Modal>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 mt-4 mb-4 abtmain">
            <p>
              <Link to="/admin"> Dashboard</Link> > Money Donations
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
                  <th scope="col">Amount</th>
                  <th scope="col">Charges</th>
                  <th scope="col">Final Amount</th>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Status</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                {donations.length !== 0 ? (
                  donations.map((donation, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{donation.name}</td>
                        <td>{donation.phone}</td>
                        <td>{donation.amount}</td>
                        <td>{donation.charges}</td>
                        <td>{donation.finalAmount}</td>
                        <td>{donation.transactionId}</td>
                        <td>{donation.status}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            More
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No blood requests found</h3>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto pb-4">
            <div className="order-section mt-3 m-3">
              <div className="col-lg-12 col-md-6 mt-2">
                <h3 className=" mt-2">Total</h3>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3 col-md-4 col-sm-6  ">
                  <h4 className="mt-2">Donations</h4>
                  <div
                    className="card sellerCard p-3"
                    style={{ border: "8px solid rgb(233, 84, 81)" }}
                  >
                    <h1
                      style={{
                        color: "rgb(233, 84, 81)",
                        fontSize: "20px"
                      }}
                    >
                      {totalDonations}
                    </h1>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  ">
                  <h4 className="mt-2">Charges</h4>
                  <div
                    className="card sellerCard p-3"
                    style={{ border: "8px solid rgb(233, 84, 81)" }}
                  >
                    <h1
                      style={{
                        color: "rgb(233, 84, 81)",
                        fontSize: "20px"
                      }}
                    >
                      {totalCharges}
                    </h1>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  ">
                  <h4 className="mt-2">Donation Amount</h4>
                  <div
                    className="card sellerCard p-3"
                    style={{ border: "8px solid rgb(233, 84, 81)" }}
                  >
                    <h1
                      style={{
                        color: "rgb(233, 84, 81)",
                        fontSize: "20px"
                      }}
                    >
                      {totalDonationAmount}
                    </h1>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6  ">
                  <h4 className="mt-2">Amount</h4>
                  <div
                    className="card sellerCard p-3"
                    style={{ border: "8px solid rgb(233, 84, 81)" }}
                  >
                    <h1
                      style={{
                        color: "rgb(233, 84, 81)",
                        fontSize: "20px"
                      }}
                    >
                      {totalAmount}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyDonations;
