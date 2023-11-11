import React from "react";
import Lottie from "lottie-react";
import HelloAnimation from "../assets/hello.json";
import "./styles/page1.css";

function page1() {
  return (
    <>
      <div className="page1container">
        
        <div className="page1textcontainer">
          <div className="page1Hitext">Hi!</div>
          <div className="page1Introtext">I'm Elton, a web developer.</div>
          <div className="page1Introtext2">Welcome to my page.</div>
        </div>
        <div className="animationpage1">
        <Lottie animationData={HelloAnimation} />
        </div>
      </div>
    </>
  );
}

export default page1;
