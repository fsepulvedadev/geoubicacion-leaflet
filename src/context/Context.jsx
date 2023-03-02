import { useContext, createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [mostrarCamara, setMostrarCamara] = useState(true);
  const [captura, setCaptura] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mapRef, setMapRef] = useState(" ");

  const handleTakePhoto = (data) => {
    setCaptura(data);
    setMostrarCamara(false);
    console.log(captura);
  };

  return (
    <AppContext.Provider
      value={{
        handleTakePhoto,
        captura,
        setCaptura,
        mostrarModal,
        setMostrarModal,
        mapRef,
        setMapRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    console.error("No context found.");
  }
  return context;
}

export default useAppContext;
