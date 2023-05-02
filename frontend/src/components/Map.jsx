import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const position = [8.1386, 5.1026];
  const zoomLevel = 2.5;

  return (
    <MapContainer className="mapContainer" center={position} zoom={zoomLevel}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
