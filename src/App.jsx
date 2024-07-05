import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import Home from "./pages/homePage";
import AirportDetails from "./pages/airportPage";
import "./App.css";

const App = () => {
  return (
    <Provider theme={defaultTheme} colorScheme={"light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airports/:airportId" element={<AirportDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
