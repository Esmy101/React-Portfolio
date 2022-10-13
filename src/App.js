import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <header className="react-app">
        <Nav />
        <Header />
      </header>
      <Footer />
    </>
  );
}

export default App;
