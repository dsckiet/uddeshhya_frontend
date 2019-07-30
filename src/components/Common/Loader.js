import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
      <div style={{width:'48px',height:'48px'}} className="text-center lds-ripple">
        <div />
        <div />
      </div>
  );
};

export default Loader;

