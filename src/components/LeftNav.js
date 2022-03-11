import React from "react";
import "../styles/LeftNav.css";

function LeftNav() {
  const divs = ["home", "about", "education", "work", "projects", "contact"];

  return divs.map((div, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          color: "#e64719",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "9px",
              width: "9px",
              borderRadius: "50%",
              backgroundColor: "#e64719",
              marginRight: "10px",
            }}
          />
          <p className="text">{div.toUpperCase()}</p>
        </div>
      </div>
    );
  });
}

function LeftNavContainer() {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        marginRight: "20px",
        justifyContent: "center",
      }}
    >
      <LeftNav />
    </div>
  );
}

export default LeftNavContainer;
