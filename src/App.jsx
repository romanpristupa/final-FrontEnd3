import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";


function App() {
  return (
      
          <Router>
            <Routes>
              <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="detail" element={<Detail/>} />
                <Route path="*" element={<NotFound/>} />
              </Route>      
            </Routes>
          </Router>
      
  );
}

export default App;
