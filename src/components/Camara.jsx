import { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import Camera from "react-html5-camera-photo";

import "react-html5-camera-photo/build/css/index.css";

const Camara = () => {
  const [mostrarCamara, setMostrarCamara] = useState(false);

  const { captura, handleTakePhoto } = useContext(AppContext);

  return (
    <div className="bg-green-500 py-6 h-[92vh]">
      {captura && !mostrarCamara ? (
        <div>
          <img src={captura} className="w-10/12 mx-auto" />
          <div className="flex justify-center items-center mt-2">
            <button
              className="p-1 bg-slate-300 rounded-lg my-1 border-2 border-slate-400"
              onClick={() => setMostrarCamara(!mostrarCamara)}
            >
              Mostrar camara
            </button>
            <button
              onClick={setMostrar(false)}
              className="p-1 bg-slate-300 rounded-lg my-1 border-2 border-slate-400"
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <Camera
          onTakePhoto={(data) => handleTakePhoto(data)}
          idealFacingMode={"environment"}
        />
      )}
    </div>
  );
};

export default Camara;
