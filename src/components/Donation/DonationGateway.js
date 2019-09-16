import React, { useState } from "react";
import "./style.css";
import * as apiService from "../../utils/Services";

const DonationGateway = props => {
  const [isLoading, setIsLoading] = useState(false);

  const paymentHandler = e => {
    setIsLoading(true);
    e.preventDefault();

    const { order } = props.location.state.data;
    const options = {
      key: props.location.state.data.key,
      name: "Payments",
      description: "Donate at Uddeshhya",
      amount: order.amount,
      order_id: order.id,
      notes: order.notes,

      handler: async response => {
        let data = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          amount: order.amount
        };
        apiService
          .donationSuccess(data)
          .then(res => {
            if (res.message === "success") {
              alert("Payment successfully completed. Redirecting to home page");
              props.history.push(`/`);
            }
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err.response.data.message);
          });
      },

      theme: {
        color: "#9D50BB"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  //button
  const buttonClass = isLoading
    ? `loginbutton btn btn-primary ld-ext-right running`
    : `loginbutton btn btn-primary ld-ext-right`;
  console.log(props.location.state);
  const amount = props.location.state.data.order.amount / 100;
  return (
    <div className="content">
      {isLoading ? (
        <div className="overlay">
          <div className="overlay-content mt-2">
            Please don't close this window or click back button.
          </div>
        </div>
      ) : null}
      <div className="fluid-container">
        <div className="container text-center login-container pt-5 pb-5">
          <div className="container col-lg-12">
            <div className="login-card card col-md-7 col-lg-6 p-3 m-auto">
              <div className="p-5 text-center">
                <h3 style={{ color: "#ffffff" }}>Donate @ Uddeshhya</h3>
                <br />
                <form className="text-center">
                  <div className="form-group">
                    <label
                      style={{ color: "#ffffff" }}
                      htmlFor="pay_amount"
                      className="pay_amount"
                    >
                      Amount to be paid
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={amount}
                      readOnly
                    />
                  </div>

                  <button
                    onClick={paymentHandler}
                    className={buttonClass}
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Pay Now"}
                    {isLoading ? (
                      <div className="ld ld-ring ld-spin" />
                    ) : (
                      <i className="fas fa-arrow-right m-1"> </i>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonationGateway;
