import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Portfolio/>}/>
                <Route path='/aboutMe' element={<AboutMe/>}/>
            </Routes>
        </div>
    );
}

export default App;
