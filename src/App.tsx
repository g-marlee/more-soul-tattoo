import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import FrequentlyAsked from "./pages/FrequentlyAsked";

function App() {
  return (
    <div className="bg-phone bg-cover min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col w-full">
      <header className="flex fixed shadow-md pr-2 justify-end items-center font-text text-xl bg-neutral-800 bg-opacity-30 w-full h-11">
        <Link
          to="/"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          Portfolio
        </Link>
        <Link
          to="/FrequentlyAsked"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          className="text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          Booking
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/FrequentlyAsked" element={<FrequentlyAsked />} />
      </Routes>
    </div>
  );
}

export default App;
