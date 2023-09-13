import { createContext, useContext, useMemo, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children })  => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'));
    };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme}>{children}</div>
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