
import { createContext, useContext, useMemo, useState } from "react";

// Crear el contexto global
const GlobalContext = createContext();

// Crear un proveedor para el contexto global
export function GlobalProvider({ children }) {
  // Definir el estado y la función para cambiar el tema
  const [theme, setTheme] = useState('light');

  // Usar useMemo para memorizar el valor del contexto
  const toggleTheme = () => {

      // Cambiar el tema
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook para acceder al contexto global
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext debe usarse dentro de un GlobalProvider');
  }
  return context;
}

export default GlobalContext;