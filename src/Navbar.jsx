import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  console.log(showMenu, "showMenu");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <nav className="nav">
      <h2 className="logo">LOGO</h2>
      {showMenu ? (
        <div className="nav-contents">
          <p>
            Qualifications <i className="fa fa-angle-down"></i>
          </p>
          <p>
            Organizations <i className="fa fa-angle-down"></i>
          </p>
          <p>
            Research & Analysis <i className="fa fa-angle-down"></i>
          </p>
          <p>
            Lorem Ipsum <i className="fa fa-angle-down"></i>
          </p>
          <p>
            Lorem ipsum <i className="fa fa-angle-down"></i>
          </p>
          <i className="fa fa-search"></i>
          <button className="nav-btn">Enrolment</button>
        </div>
      ) : (
        <i className="fa fa-navicon"></i>
      )}
    </nav>
  );
};

export default Navbar;
