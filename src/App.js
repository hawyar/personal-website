import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
