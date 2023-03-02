import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import IconLocation from "../components/IconLocation";
import { useAppContext } from "../context/Context.jsx";
import { simpleMapScreenshoter } from "leaflet";

const Inicio = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [center, setCenter] = useState([-38.9480448, -68.0624128]);
  const [arboles, setArboles] = useState([]);

  const { mapRef, setMapRef } = useAppContext();

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setCenter([position.coords.latitude, position.coords.longitude]);
        console.log("Ubicacion actualizada");
      },
      (error) => {
        throw error;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  const MarcadorUbicacion = () => {
    const map = useMapEvents({
      click: (e) => {
        map.locate();
      },
      locationfound: (e) => {
        setLat(e.latitude);
        setLng(e.longitude);
        setCenter([e.latitude, e.longitude]);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  };
  /* 
  function ControlScreenshot() {
    const screenshoter = new simpleMapScreenshoter({
      hidden: false,
    });
    const map = useMap();

    map.addControl(screenshoter);

    console.log(screenshoter);

    return null;
  } */

  const mostrarGeo = () => {
    const newLat = lat + 0.00001;
    const newLng = lng + 0.00001;

    setLat(newLat);
    setLng(newLng);
  };

  const cambiarUbi = (lng, lat) => {
    setLat(lat);
    setLng(lng);
    setCenter([40.4168, -3.7038]);
  };

  const agregarArbol = () => {
    const newArbol = {
      id: arboles.length + 1,
      latitud: lat,
      longitud: lng,
      especie: "Roble",
    };
  };

  function startCapture(displayMediaOptions) {
    return navigator.mediaDevices
      .getDisplayMedia(displayMediaOptions)
      .catch((err) => {
        console.error(`Error:${err}`);
        return null;
      });
  }

  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          maxNativeZoom={18}
          maxZoom={30}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lat && lng && (
          <Marker position={[lat, lng]} icon={IconLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        {/* Desabilitado hasta que se encuentre la solucion a que esta funcion se llama cada 1 segundo y genera un boton cada vez */}
        {/*  <ControlScreenshot /> */}
        <MarcadorUbicacion />
      </MapContainer>
    </div>
  );
};

export default Inicio;
