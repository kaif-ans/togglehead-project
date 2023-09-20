import React from "react";
import Image from "./Images/slider1.jpg";

const Slider1 = () => {
  return (
    <div className="s1-div">
      <div className="s1-info-div">
        <h2 className="s1-head">Lorem Ipsum</h2>
        <p className="s1-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          facilisis elit bibendum, nec risus maximus. Donec ultricies lectus
          quis nibh sagittis volutpat. Nam mi libero, volutpat et felis at,
          fermentum rutrum nisi.
        </p>
        <button className="s1-btn">
          Know More <i className="fa fa-caret-right"></i>
        </button>
      </div>
      <img src={Image} alt="slider Image" className="s1-img" />
    </div>
  );
};

export default Slider1;
