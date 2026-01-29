import "./App.css";
import React from "react";
import NavBar from "../src/common/NavBar";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main>
        <Home />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
