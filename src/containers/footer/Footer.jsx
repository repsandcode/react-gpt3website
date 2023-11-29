import React from "react";
import "./footer.css";

import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Mezzanine Floor, Hotel Castro, Sinsuat Avenue - Cotabato City, Davao
            del Sur, Philippines
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>AI Models</h4>
          <p>GPT-4 Turbo</p>
          <p>GPT-4</p>
          <p>GPT-3.5</p>
          <p>GPT-3</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Open AI</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Mezzanine Floor, Hotel Castro, Sinsuat Avenue</p>
          <p>075-192845</p>
          <p>info@gpt3.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
