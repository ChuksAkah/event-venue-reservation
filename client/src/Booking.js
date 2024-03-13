import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    telephone: "",
    venueType: "",
    bookingDate: "",
    bookingHours: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        `${process.env.API_URL}/api/booking`,
        formData
      );


      navigate("/thanks");
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "Failed to submit the form due to a network error. Please try again later."
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-box">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Booking</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="venueType">Venue Type:</label>
            <select
              id="venueType"
              name="venueType"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Select Venue Type</option>
              <option value="hall">Hall</option>
              <option value="room">Room</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="bookingDate">Booking Date:</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="bookingHours">Booking Hours:</label>
            <input
              type="time"
              id="bookingHours"
              name="bookingHours"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
