import React from "react";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">weareuddeshhya@gmail.com</div>
          <div className="row">
            <div className="col-lg-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://m.facebook.com/profile.php?id=298807900136267"
              >
                <i className="fab fa-facebook" />{" "}
              </a>
            </div>
            <div className="col-lg-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/uddeshhya_"
              >
                <i className="fab fa-instagram" />{" "}
              </a>
            </div>
            <div className="col-lg-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/UDDESHHYA_"
              >
                <i className="fab fa-twitter" />{" "}
              </a>
            </div>
            <div className="col-lg-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCbeFpUnQ6wNY_VH24JXcYdA"
              >
                <i className="fab fa-youtube" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
