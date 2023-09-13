import { createContext, useContext, useReducer, useMemo } from "react";
import { themeReducer, initialState } from "./themeReducer";


const ThemeContext = createContext();

export const ThemeProvider = ({ children })  => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
      dispatch({type: "TOGGLE_THEME"});
    };

  const value = useMemo(() => ({ theme: state.theme, toggleTheme }), [state.theme,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={state.theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

// Custom hook para acceder al contexto global
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un proveedor de temas');
  }
  return context;
}

export default ThemeContext;