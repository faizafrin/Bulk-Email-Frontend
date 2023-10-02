import React, { useEffect } from "react";
import "./home.css";
import Wave from "react-wavify";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../NavBar/Header";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <HeaderPage />
      <div className="home">
        <div className="content">
          <h1>Welcome To Bulk Email Tool</h1>
          <div className="intro">
            <h5> </h5>
            <p
              style={{
                width: "50%",
                alignItems: "center",
                textAlign: "match-parent",
              }}
            >
              Bulk email refers to the practice of sending a large number of email messages to a group of recipients simultaneously. It is commonly used for marketing, communication, or informational purposes by organizations and individuals.
               Key features include a sizable recipient list, permission-based sending (opt-in), personalization, tracking, and compliance with anti-spam regulations. Bulk email can be an effective way to reach a wide audience, but it must be done responsibly to avoid spamming and maintain a positive sender reputation.




            </p>
          </div>
          <Button className="btn" onClick={() => navigate("/login")}>
            Start Here
          </Button>
        </div>
        <Wave
          fill="white"
          className="home-wave"
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.2,
            points: 5,
          }}
        />
      </div>
    </>
  );
};

export default HomePage;
