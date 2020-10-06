import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.banner?.image?.original})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{props.banner?.name}</h1>
        <h1 className="banner__description">
          {props.truncate(
            props.banner?.summary?.replace(/(<([^>]+)>)/gi, ""),
            150
          )}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
