import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import ThemeContext, {themes} from "./Components/utils/global.context";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState (themes.light);

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(theme.dark);
  };

  return (
    <div className="App">
         <ThemeContext.Provider value = {{theme, handleChangeTheme}}>
          <Router>
          <Navbar/>
            <Routes>              
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="detail" element={<Detail/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>  
          <Footer/>
          </Router>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;
