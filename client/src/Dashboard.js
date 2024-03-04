import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const credentials = useSelector((state) => state.userData);

  return (
    <>
      {credentials ? (
        <>
          <h1>Dashboard</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "90vh",
              width: "100%",
              backgroundColor: "white",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Username: </h3>
              <p>{credentials.username}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Name: </h3>
              <p>{credentials.name}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Email: </h3>
              <p>{credentials.email}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Telephone: </h3>
              <p>{credentials.telephone}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Venue Type: </h3>
              <p>{credentials.venueType}</p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Booking Date: </h3>
              <p>{credentials.bookingDate}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                backgroundColor: "white",
                color: "black",
                fontSize: "1.5rem",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Booking Hours: </h3>
              <p>{credentials.bookingHours}</p>
            </div>
          </div>
        </>
      ) : (
        // window.location.reload()
        <></>
      )}
    </>
  );
}

export default Dashboard;
