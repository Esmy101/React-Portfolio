import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectPage";
import "./App.css";

const Pages = {
  home: <AboutMe />,
  portfolio: <Projects />,
  contact: <Contact />,
  resume: <Resume />,
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.home);
  return (
    <>
      <header className="react-app">
        <Nav pages={Pages} navigate={setCurrentPage} />
        <Header />
      </header>
      {currentPage}
      <Footer />
    </>
  );
}

export default App;
