import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "4rem",
      }}
    >
      <div
        className="name-text"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <p
          style={{
            color: "#e64719",
          }}
        >
          BRIAN WELOBA
        </p>
        <p className="portfolio-text">PORTFOLIO</p>
      </div>
    </div>
  );
}

export default Home;
