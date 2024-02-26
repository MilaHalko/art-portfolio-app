import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import React from "react";

function App() {
    return (
        <div>
            <Navbar/>
            <AboutMe/>
            <Portfolio/>
        </div>
    );
}

export default App;
