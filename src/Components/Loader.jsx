import React from "react";

const Loader = ({isLoading, error}) => {
  return (
    <div id="preloader">
      <div className="circle-side-2"></div>
    </div>
  );
};

export default Loader;