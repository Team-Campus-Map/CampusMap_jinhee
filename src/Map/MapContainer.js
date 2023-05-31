import React, { useState } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import styled from "styled-components";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 36.8395,
  lng: 127.1839,
};
function MapComponent() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAIqUTwItKGkYJk5-ThH8LR_y-ssq5CFB4",
  });

  const [map, setMap] = useState(true);

  const onLoad = React.useCallback((map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const markerPositions = [
    { lat: 36.83926030795387, lng: 127.18603149699244 }, // 본부동 36.83926030795387, 127.18603149699244
    { lat: 36.84018929608955, lng: 127.18463587488411 }, // 진리관 36.84018929608955, 127.18463587488411
    { lat: 36.840611253358325, lng: 127.18238795158771 }, // 복지동 36.840611253358325, 127.18238795158771
    { lat: 36.83976636287347, lng: 127.18485963319753 }, // 교수회관 36.83976636287347, 127.18485963319753
    { lat: 36.838910842187026, lng: 127.18741234052798 }, // 음악관 36.838910842187026, 127.18741234052798
    { lat: 36.838745349988, lng: 127.18444930797162 }, // 지혜관 36.838745349988, 127.18444930797162
    { lat: 36.841386113750865, lng: 127.18733325304896 }, // 체육관 36.841386113750865, 127.18733325304896
    { lat: 36.841074140057124, lng: 127.18838215252792 }, // 조형관 36.841074140057124, 127.18838215252792
    { lat: 36.84177429006734, lng: 127.1857342599891 }, // 승리관 36.84177429006734, 127.1857342599891
    { lat: 36.83958260620584, lng: 127.18266355865232 }, // 백석홀 36.83958260620584, 127.18266355865232
    { lat: 36.838920259508406, lng: 127.18741540013255 }, // 예술관 36.838920259508406, 127.18741540013255
    { lat: 36.83754856085166, lng: 127.18508330255652 }, // 외식관 36.83754856085166, 127.18508330255652
    { lat: 36.84010852705307, lng: 127.18379031008189 }, // 베네스타 공원 36.84010852705307, 127.18379031008189
    { lat: 36.84029898246622, lng: 127.18331941980506 }, // 뷰리카페 36.84029898246622, 127.18331941980506
    { lat: 36.841233051234504, lng: 127.18532841481648 }, // 운동장 36.841233051234504, 127.18532841481648
    { lat: 36.840877438670375, lng: 127.18368441074502 }, // 목양관 36.840877438670375, 127.18368441074502
    { lat: 36.83940776998015, lng: 127.18355205800808 }, // 인성관 36.83940776998015, 127.18355205800808
    { lat: 36.84253464839115, lng: 127.18515043820727 }, // 백석생활관 36.84253464839115, 127.18515043820727
    { lat: 36.8374386834928, lng: 127.18245961533842 }, // 창조관 36.8374386834928, 127.18245961533842
    { lat: 36.83864510731401, lng: 127.1820733772408 }, // 은혜관 36.83864510731401, 127.1820733772408
    { lat: 36.838473375547366, lng: 127.1831811295636 }, // 자유관 36.838473375547366, 127.1831811295636
    { lat: 36.83773921789712, lng: 127.18407698735162 }, // 학술정보관 36.83773921789712, 127.18407698735162
  ];
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true, styles: myStyles }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        onLoad={onLoad}
        position={{ lat: 36.83926030795387, lng: 127.18603149699244 }}
        icon={{
          url: "icon.svg",
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
      <InfoWindowF
        position={selectedMarker}
        options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
        onCloseClick={() => {
          setSelectedMarker(null);
        }}
      ></InfoWindowF>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
export default MapComponent;
