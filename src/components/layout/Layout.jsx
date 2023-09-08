import React from "react";
import Navbar from "../navbar/Navbar";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
    </>
  );
}
