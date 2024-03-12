import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchData, setSearchData] = useState({
    venueType: "",
    bookingDate: "",
    bookingHours: "",
  });

  const [searchRes, setSearchRes] = useState();

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/search",
        searchData
      );
      setSearchRes(response.data);
      // console.log("Search response:", response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <>
      {searchRes === true ? (
        <>
          <h2 align="center" className="mt-4">
            Available
          </h2>
        </>
      ) : searchRes === null ? (
        <>
          <div className="main-box">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Search</h1>
                </div>
              </div>
              <div className="row">
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
              </div>
              <div className="row">
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
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <h2 align="center" className="mt-4">
            Not Available
          </h2>
        </>
      )}
    </>
  );
};

export default Search;
