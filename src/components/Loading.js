import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/loading.json";
import "./styles/loading.css";

const Loading = () => {
  return <div className="loadingcontainer">
    <div className="animationloading">
        <Lottie animationData={LoadingAnimation} />
      </div>
      <div>Please be patient, the data is being loaded</div>
      <div className="loadingdecotext">
      <div>use</div> <div className="higlightedtext">Arrow Keys</div> <div>to navigate through this page</div>
      </div>
  </div>;
  
};

export default Loading;