import React from "react";

function Thanks() {
  return (
    <>
      <div
        className="thanks-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          width: "100%",
          backgroundColor: "white",
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        <h1>Thank you for your booking!</h1>
        <p>We will get back to you soon!</p>
      </div>
    </>
  );
}

export default Thanks;
