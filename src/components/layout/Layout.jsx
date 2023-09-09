import React from "react";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
