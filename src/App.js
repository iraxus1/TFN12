import React from "react";
import {Route, Routes} from "react-router-dom";
import {About, Contact, De, Home, Pl, Services, Us, UnexpectedSite} from "./components/index.js";

function App() {
  return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contact/de" element={<De/>}/>
            <Route path="/contact/pl" element={<Pl/>}/>
            <Route path="/contact/us" element={<Us/>}/>
            <Route path="*" element={<UnexpectedSite/>}/>
        </Routes>
    </div>
  )
}

export default App;
