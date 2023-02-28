import "./App.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icono from "./assets/icono.svg";
import IconLocation from "./components/IconLocation";

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [center, setCenter] = useState([-38.9480448, -68.0624128]);

  useEffect(() => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setCenter([position.coords.latitude, position.coords.longitude]);
          console.log("Ubicacion actualizada");
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }, 1000);
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

  return (
    <div className="App">
      <button onClick={mostrarGeo}>Click</button>
      <h1>Longitud: {lng}</h1>
      <h1>Latitud: {lat}</h1>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {lat && lng && (
          <Marker position={[lat, lng]} icon={IconLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        <MarcadorUbicacion />
      </MapContainer>
    </div>
  );
}

export default App;
