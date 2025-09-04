import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Form from "../Form";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
      path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Form />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Rout;
