import React, { Component } from "react";
import logo from "../../assets/images/dsc.svg";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        className="mt-5"
        style={{
          background:
            "linear-gradient(to bottom, white 0%, white 50%, #F1F1F1 50%, #F1F1F1 100%)",
        }}
      >
        <div className="container">
          <p
            className="abt"
            style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
          >
            Contact Us
          </p>
          <div className="card mt-4 p-0">
            <iframe
              title="uddeshhya map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.901629831216!2d77.49688071461553!3d28.752353835399596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf471fa0e11dd%3A0xb1b8611a21f64163!2sUDDESHHYA+OFFICE!5e0!3m2!1sen!2sin!4v1560856588584!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ borderRadius: 4, border: 0 }}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-lg-6">
              <p>
                <strong>Reach Us</strong>
              </p>
              <p>
                13th KM Stone, KIET Group Of Institutions, Delhi Meerut Highway,
                Ghaziabad, IN 201206
              </p>
              <p>weareuddeshhya@gmail.com</p>
              <p>+91-8909884156 , +91-8564063392 , +91-7275559927</p>
            </div>
            <div className="col-lg-3" />
            <div className="col-lg-3">
              <p>
                <strong>Designed and Developed</strong>
              </p>
              <p>in collaboration with</p>
              <a
                href="http://dsckiet.com?utm_source=uddeshhya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img style={{ width: "100%" }} src={logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
