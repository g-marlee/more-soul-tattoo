import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import FrequentlyAsked from "./pages/FrequentlyAsked";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <main className="">
      <header className="flex fixed pr-2 justify-end items-center font-text text-xl bg-gradient-to-b from-neutral-900 w-full h-24">
        <Link
          to="/"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-100"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-100"
        >
          Portfolio
        </Link>
        {/* <Link
          to="/FrequentlyAsked"
          className="mr-2 text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          FAQ
        </Link> */}
        <Link
          to="/Booking"
          className="text-shadow-lg text-neutral-300 bg-opacity-0 hover:text-neutral-500"
        >
          Booking
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/FrequentlyAsked" element={<FrequentlyAsked />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </main>
  );
}

export default App;
