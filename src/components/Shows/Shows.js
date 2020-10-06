import React, { useState, useEffect } from "react";
import "./Shows.css";
import axios from "../../axios";
import requests from "../../requests";
import Banner from "../Banner/Banner";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShowIndex);
      setShows(request.data);
      setBanner(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Banner banner={banner} truncate={truncate} />
      <div className="shows">
        <h1>Show Index</h1>

        <div className="shows__posters">
          {shows.map((show) => (
            <img
              key={show.id}
              className="shows__poster"
              src={`${show.image.medium}`}
              alt={show.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shows;
