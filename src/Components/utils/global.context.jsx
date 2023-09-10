import { createContext } from "react";


export const initialState = {theme: "", data: []};
export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const themes={
    light:{
      font:"black",
      background:"white"
    },
    dark:{
      font:"white",
      background:"black"
  }
};

const ThemeContext= createContext(themes.light); 


export default ThemeContext;
