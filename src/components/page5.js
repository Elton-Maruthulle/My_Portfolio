import React from "react";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/contacts.json";
import "./styles/page5.css";
import Githubpic from "../assets/github.png";
import Linkedinpic from "../assets/linkedin.png";
import Whatsapppic from "../assets/Whatsapp.png";
import Facebookpic from "../assets/facebook.png";
import Emailppic from "../assets/gmail.png";
import Myavatar from "../assets/my pic.jpg";

const SocialLinks = () => {
  const githubLink = "https://github.com/Elton-Maruthulle";
  const linkedinLink = "https://www.linkedin.com/in/elton-maruthulle-ba8645252";
  const whatsappLink = "https://wa.me/yourphonenumber";
  const facebookLink = "https://www.facebook.com/yourfacebook";
  const email = "eltonmaruthulle@gmail.com";

  return (
    <div className="page5maincontainer">
      <div className="animationpage5">
        <Lottie animationData={ContactAnimation} />
      </div>
      <div className="page5content">
      <img src={Myavatar} className="Myavatar" />
        <div className="contactme">Contact Me On...</div>
        <div className="social-links">
          <div className="linkslink">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={Githubpic} className="Githubpic" />
            </a>
          </div>
          <div className="linkslink">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src={Linkedinpic} className="LinkedIn" />
            </a>
          </div>
          <div className="linkslink">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <img src={Whatsapppic} className="Whatsapppic" />
            </a>
          </div>
          <div className="linkslink">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src={Facebookpic} className="Facebook" />
            </a>
          </div>
          <div className="linkslink">
            <a href={`mailto:${email}`}>
              <img src={Emailppic} className="Email" />
            </a>
          </div>
        </div>
        <div className='emailemail'>©eltonmaruthulle@gmail.com</div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SocialLinks;
