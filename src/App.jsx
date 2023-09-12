import React from "react";
import { useState } from "react";
import { GlobalProvider } from "./Components/Utils/Global.Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";


function App() {

   const [theme, setTheme] = useState({ light: "light", dark: "dark" });


  const handleChangeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className="App">
          <GlobalProvider value = {{ theme, toggleTheme: handleChangeTheme }}>
             <Router>
                <Navbar />
                <Routes>              
                   <Route index element={<Home/>}/>
                   <Route path="contact" element={<Contact/>} />
                   <Route path="favs" element={<Favs/>} />
                   <Route path="detail" element={<Detail/>} />
                   <Route path="*" element={<NotFound/>} />
                </Routes>  
                <Footer />
             </Router>
          </GlobalProvider>
      </div>
  );
}

export default App;
