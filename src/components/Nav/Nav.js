import React, { useState, useEffect } from "react";
import "./Nav.css";
import Favorite from "../Favorite/Favorite";

const Nav = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://static.tvmaze.com/images/tvm-header-logo.png"
        alt="TVmaze Logo"
      />

      {props.favorite?.length > 0 ? (
        <Favorite favorite={props.favorite} />
      ) : null}
    </div>
  );
};

export default Nav;
