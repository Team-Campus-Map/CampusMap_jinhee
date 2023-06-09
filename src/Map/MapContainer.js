import React, { Component } from "react";

class MapContainer extends Component {
  componentDidMount() {
    // Google 지도 API를 비동기로 로드
    const script = document.createElement("script");
    //https://maps.googleapis.com/maps/api/js?key=본인이 발급 받은 키
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBAl04sqw3RbxgFsN7gGnsA7BaCaZz5Ong`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // API 로드, 콜백 함수 실행
    script.onload = () => {
      this.initMap();
    };
  }

  //여기부터 gps 기능 및 각 위치에 대한 마커 설정 등의 기능 추가

  initMap() {
    // 내 현재 위도 경도 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const center = { lat: latitude, lng: longitude };

          // 지도 초기화 및 설정
          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center,
              zoom: 15,
            }
          );

          // 내 위치 마커
          const userMarker = new window.google.maps.Marker({
            position: center,
            map,
            // 구글에서 주는 아이콘만 사용 가능, 이유는 몰라 그렇대
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          });

          // 내 위치 실시간 추적
          navigator.geolocation.watchPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const updatedCenter = { lat: latitude, lng: longitude };
              console.log(updatedCenter);

              // 지도 중심 위치 업데이트
              map.setCenter(updatedCenter);

              // 내 위치 마커 업데이트
              userMarker.setPosition(updatedCenter);
            },
            (error) => {
              console.error("사용자 위치 추적이 안됩니다.", error);
            }
          );

          // 마커들의 위치 정보
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

          //위에 각 마커에 대한 내용
          const markerInfo = [
            "본부동 | 편의점 | 열람실",
            "진리관 | 편의점 | 여성회복실 | 서점 | 은행",
            "복지동 | 동아리방 | 학식",
            "교수회관 | 학식",
            "음악관",
            "지혜관",
            "체육관",
            "조형관",
            "승리관",
            "백석홀 | 대강당 | 소강당",
            "예술관",
            "외식관 | 학식",
            "베네스다 공원",
            "뷰리카페",
            "운동장 | 축구장 | 풋살장 | 농구장",
            "목양관 | 편의점",
            "인성관",
            "백석생활관 | 편의점 | 카페",
            "창조관",
            "은혜관",
            "자유관 | 편의점",
            "학술정보관 | 도서관",
          ];

          // 정보 창 생성
          const infoWindow = new window.google.maps.InfoWindow();

          // 각 위치에 대해 마커 생성
          markerPositions.forEach((position, index) => {
            const marker = new window.google.maps.Marker({
              position: position,
              map: map,
            });

            // 마커 클릭 이벤트 리스너 등록
            marker.addListener("click", () => {
              // 정보 창에 표시할 내용 설정
              infoWindow.setContent(markerInfo[index]);

              // 정보 창을 클릭한 마커 근처에 표시
              infoWindow.open(map, marker);
            });
          });
        },
        (error) => {
          console.error("위치가 안 잡힙니다.:", error);
        }
      );
    } else {
      console.error("GPS가 꺼져있습니다.");
    }
  }

  render() {
    // 구글 맵 크기
    return <div id="map" style={{ height: "570px" }}></div>;
  }
}

export default MapContainer;
