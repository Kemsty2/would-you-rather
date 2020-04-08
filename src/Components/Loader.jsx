import React from "react";
import Error from "../Pages/Error";

const Loader = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div id="preloader">
        <div className="circle-side-2"></div>
      </div>
    );
  } else if (error) {
    return <Error />;
  }
};

export default Loader;
