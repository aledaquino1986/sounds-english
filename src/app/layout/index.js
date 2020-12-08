import React from "react";
import "./styles.css";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <main className="container">
      <Header />
      {children}
    </main>
  );
}
