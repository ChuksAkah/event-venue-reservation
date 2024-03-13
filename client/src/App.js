import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Booking from "./Booking";
import Search from "./Search";
import Update from "./Update";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Thanks from "./Thanks";
import Dashboard from "./Dashboard";
import React, { useEffect } from "react";
import Loading from "./LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  let loading = useSelector((state) => state.loading);
  let userData = useSelector((state) => state.userData);
  console.log(process.env.REACT_APP_API_URL);
  const dispatch = useDispatch();
  const setLoading = (value) => {
    dispatch({ type: "SET_LOADING", payload: value });
  };

  const setUserData = (value) => {
    dispatch({ type: "SET_USER_DATA", payload: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (localStorage.getItem("token") === null) {
          setLoading(false);
          return;
        }

        if (!userData || userData === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/get-user-data`,
            {
              token: localStorage.getItem("token"),
            }
          );

          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="container">
        <Header userData={userData} />
        <Routes>
          <Route path="/" element={<Home />} />
          {userData ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Navigate to={"/dashboard"} />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Navigate to={"/login"} />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/update" element={<Update />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default React.memo(App);
