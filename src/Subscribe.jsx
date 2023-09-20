import React from "react";
import Image from "./Images/subscribeImg.jpg"

const Subscribe = () => {
  return (
    <div className="subs-full-div">
      <div className="subs-div">
        <h1 className="subscribe">Subscribe</h1>
        <p className="subs-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          facilisis elit bibendum, nec risus
        </p>
        <div className="input-btn-div">
          <input type="email" placeholder="Enter your Email Address" />
          <button className="subs-btn">
            Subscribe Now <i className="fa fa-caret-right"></i>
          </button>
        </div>
      </div>
      <img src={Image} alt="Subscribe Image" className="subs-img" />
    </div>
  );
};

export default Subscribe;
