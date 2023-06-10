import React, { useState } from "react";
import MapDetailComponent from "./MapDetailComponent";
import MapDetailButton from "./MapDetailButton";
const MapDetail = ({ buttonClick }) => {
  const [showDetailHeader, setShowDetailHeader] = useState(false);

  return (
    <>
      <div className="map-detail-body">
        <div className="map-detail-Container-title">Campus Map 건물별 정보</div>
        <div className="map-detail-Container-body">
          <div className="map-detail-Container-body-button">
            <MapDetailButton />
          </div>
          {/* <MapDetailComponent {...detailheader.cardHeader1} />
          <MapDetailComponent {...detailbody.card1} /> */}
        </div>
      </div>
    </>
  );
};

export default MapDetail;
