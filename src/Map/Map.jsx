import React from "react";
import Header from "../Header/Header";
import MapContainer from "./MapContainer";
import MapDetail from "./MapDetail";
import "../CSS/map.css";
const Map = () => {
  return (
    <>
      <div className="map-header">
        <Header />
        <div className="map-body">
          <MapContainer />
          <MapDetail />
        </div>
      </div>
    </>
  );
};

export default Map;
