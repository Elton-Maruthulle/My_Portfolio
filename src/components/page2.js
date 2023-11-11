import React from "react";
import Lottie from "lottie-react";
import CodingAnimation from "../assets/coding.json";
import "./styles/page2.css";

function page2() {
  return (
    <>
      <div className="page2container">
        
        <div className="page2textcontainer">
          <div className="page2Introtext">I'm a full-stack developer specializing in React.js, React Native, Node.js, and more. With a passion for turning ideas into user-friendly software, I've built a diverse portfolio of web and mobile applications. Let's collaborate to bring your projects to life with cutting-edge technology and a dedication to innovation.</div> 
        </div>
        <div className="animationpage2">
        <Lottie animationData={CodingAnimation} />
        </div>
      </div>
    </>
  )
}

export default page2