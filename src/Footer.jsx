import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-div">
          <div>
            <h2>Contact us</h2>
          </div>
          <div className="contact-text">
            <p>Address : sit amet, consectetur nec risus sem</p>
            <p>Email id : loremipsumsitamet@gmail.com</p>
            <p>Phone no : 123456789</p>
          </div>
        </div>
        <div className="contact-div">
          <div>
            <h2 className="follow">Follow us</h2>
          </div>
          <div>
            <i className="fa fa-facebook brand-icons"> </i>
            <i className="fa fa-linkedin-square brand-icons"></i>
            <i className="fa fa-instagram brand-icons"></i>
            <i className="fa fa-twitter brand-icons"></i>
            <i className="fa fa-youtube-play brand-icons"></i>
            <i className="fa fa-quora brand-icons"></i>
          </div>
        </div>
        <div className="head-office-div">
          <div>
            <h2 className="head-office">Head Office</h2>
          </div>
          <div className="office-cont-div">
            <i className="fa fa-map-marker head-office-icon"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              facilisis elit
            </p>
          </div>
          <div className="office-cont-div">
            <i className="fa fa-clock-o head-office-icon"></i>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="office-cont-div">
            <i className="fa fa-clock-o head-office-icon"></i>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="office-cont-div">
            <i className="fa fa-subway head-office-icon"></i>
            <p>Lorem ipsum dolor sit amet, Lorem Ipsum</p>
          </div>
        </div>
      </footer>
      <div className="rights">
        <p>
          <i className="fa fa-copyright"></i>2021 All Rights Reserved. Privacy
          Policy
        </p>
      </div>
    </>
  );
};

export default Footer;
