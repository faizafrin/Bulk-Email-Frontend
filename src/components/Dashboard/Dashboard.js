/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./dash.css";
import BasePage from "../Base/BasePage";
import dashboard from "../../assets/bulk.jpeg";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <BasePage>
        <div className="dashboard">
          <h3>Welcome to Bulk Email Tool</h3>
          <div className="dash-item">
            <img style={{ height: "55%" }} alt="dashboard" src={dashboard} />
            <h4>Email Marketing </h4>
            <p style={{ textAlign: "justify", padding: "15px" }}>
              
              Email marketing is a digital marketing strategy that involves sending targeted messages and content to a group of recipients via email. It aims to build and nurture customer relationships, promote products or services, and drive engagement and conversions. 
              Email marketing can be highly personalized, allowing businesses to tailor their messages to individual preferences and behaviors. It is a cost-effective and efficient way to reach a large audience, track performance metrics, and deliver valuable content directly to subscribers' inboxes.
            </p>
            <Button
              className="btn"
              style={{ width: "100px" }}
              onClick={() => navigate("/manualmail")}
            >
              Start
            </Button>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Dashboard;
