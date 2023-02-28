import L from "leaflet";
import Icono from "../assets/arbol.svg";

const IconLocation = L.icon({
  iconUrl: Icono,
  iconRetinaUrl: Icono,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [15, 15],
  className: "leaflet-venue-icon",
});

export default IconLocation;
