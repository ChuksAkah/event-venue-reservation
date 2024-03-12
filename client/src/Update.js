import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const setUserData = (value) => {
    dispatch({ type: "SET_USER_DATA", payload: value });
  };

  const [credentials, setCredentials] = useState({
    venueType: user.venueType,
    bookingDate: user.bookingDate,
    bookingHours: user.bookingHours,
  });

  // const [currentUser, setCurrentUser] = useState(false);

  return (
    <>
      <h1>Update</h1>
      <p>Update your profile</p>
      <p>Venue Type</p>
      <input
        type="text"
        value={credentials.venueType}
        onChange={(e) =>
          setCredentials({ ...credentials, venueType: e.target.value })
        }
      />

      <p>Booking Date</p>
      <input
        type="text"
        value={credentials.bookingDate}
        onChange={(e) =>
          setCredentials({ ...credentials, bookingDate: e.target.value })
        }
      />

      <p>Booking Hours</p>
      <input
        type="text"
        value={credentials.bookingHours}
        onChange={(e) =>
          setCredentials({ ...credentials, bookingHours: e.target.value })
        }
      />

      <button
        onClick={async () => {
          await axios
            .post("http://localhost:8000/api/update", {
              username: user.username,
              ...credentials,
            })
            .then((res) => {
              // console.log(res);

              setUserData(res.data.user);

              navigate("/dashboard");
            });
        }}
      >
        Update
      </button>
    </>
  );
}

export default Update;
