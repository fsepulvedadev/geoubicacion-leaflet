import L from "leaflet";
import Icono from "../assets/icono.svg";

const IconLocation = L.icon({
  iconUrl: Icono,
  iconRetinaUrl: Icono,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 30],
  className: "leaflet-venue-icon",
});

export default IconLocation;
