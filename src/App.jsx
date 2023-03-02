import "./App.css";
import fondo from "./assets/fondo.jpg";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen w-screen flex flex-col justify-center items-center ">
      <img src={fondo} className=" h-screen absolute -z-20" alt="" srcset="" />
      <div className="flex flex-col items-center justify-center p-2 w-10/12 rounded backdrop-blur-lg">
        <h1 className="text-2xl text-center font-bold text-emerald-700">
          Bienvenido al registrador de Arbolado!
        </h1>
        <Link
          to={"/inicio"}
          className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white mt-10 shadow-xl rounded font-bold"
        >
          Comenzar
        </Link>
      </div>
    </div>
  );
}

export default App;
