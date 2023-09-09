import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";


function App() {
  return (
      <div className="App">
          <Router>
          <Navbar/>
          <Footer/>
            <Routes>              
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="detail" element={<Detail/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </Router>
      </div>
      
  );
}

export default App;
