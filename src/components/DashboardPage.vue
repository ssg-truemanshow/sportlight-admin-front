<template>
    <h1 style="margin-left: 50px">Dashboard Page</h1>
    <div class="row">
      <div class="col-lg-3 col-md-64">
        <!-- 각 카드의 너비를 조정 -->
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">강사&회원 비율</h4>
            <canvas
              id="instructorMemberChart"
              style="height: 200px; width: 100%"
            ></canvas>
            <!-- 원형 차트 추가 -->
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <!-- 각 카드의 너비를 조정 -->
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">연령 별 유저 비율</h4>
            <canvas
              id="ageDistributionChart"
              style="height: 200px; width: 100%"
            ></canvas>
            <!-- 원형 차트 추가 -->
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <!-- 각 카드의 너비를 조정 -->
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">성별&연령 별 클래스 수강 갯수</h4>
            <canvas
              id="genderAgeClassChart"
              style="height: 330px; width: 100%"
            ></canvas>
            <!-- 이중 막대 그래프 추가 -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">지역별 클래스 현황</h4>
            <div id="map" style="width: 100%; height: 400px"></div>
            <!-- 카카오맵 추가 -->
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">카테고리 별 클래스 갯수</h4>
            <canvas
              id="categoryClassChart"
              style="height: 400px; width: 100%"
            ></canvas>
            <!-- 막대 그래프 추가 -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from "chart.js"; // Chart.js import
  
  Chart.register(...registerables); // Chart.js의 모든 구성 요소 등록
  
  export default {
    mounted() {
      // 카카오맵 초기화
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(36.5078, 127.7669), // 남한의 중심좌표
        level: 13, // 지도의 확대 레벨
      };
  
      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
  
      // 마커 데이터 (전국적으로 퍼져 있는 예시)
      const locations = [
        { title: "러닝 클래스", lat: 37.5665, lng: 126.978 }, // 서울
        { title: "헬스 클래스", lat: 35.1796, lng: 129.0756 }, // 부산
        { title: "클라이밍 클래스", lat: 37.4563, lng: 126.7052 }, // 인천
        { title: "요가 클래스", lat: 35.9078, lng: 127.7669 }, // 전라북도
        { title: "필라테스 클래스", lat: 35.1595, lng: 126.851 }, // 전라남도
        { title: "탁구 클래스", lat: 36.3504, lng: 127.3845 }, // 대전
        { title: "수영 클래스", lat: 37.5663, lng: 126.9779 }, // 서울
        { title: "배드민턴 클래스", lat: 35.5404, lng: 129.3114 }, // 울산
        { title: "태권도 클래스", lat: 37.4563, lng: 126.7052 }, // 인천
        { title: "복싱 클래스", lat: 36.7783, lng: 127.6358 }, // 충청북도
      ];
  
      // 마커 생성
      locations.forEach((location) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(location.lat, location.lng),
          title: location.title,
        });
        marker.setMap(map); // 지도에 마커 추가
      });
  
      // 강사&회원 비율 원형 차트 데이터
      const ctx = document
        .getElementById("instructorMemberChart")
        .getContext("2d");
      const instructorMemberChart = new Chart(ctx, {
        type: "pie", // 원형 차트
        data: {
          labels: ["강사", "회원"], // 레이블
          datasets: [
            {
              data: [30, 70], // 데이터 (강사 30%, 회원 70%)
              backgroundColor: [
                "#0096FF", // 강사 색상 (하늘색)
                "#FF9300", // 회원 색상 (주황색)
              ],
            },
          ],
        },
        options: {
          responsive: true, // 반응형 차트
          plugins: {
            legend: {
              position: "top", // 범례 위치
            },
          },
        },
      });
  
      // 유저 연령 비율 원형 차트 데이터
      const ageCtx = document
        .getElementById("ageDistributionChart")
        .getContext("2d");
      const ageDistributionChart = new Chart(ageCtx, {
        type: "pie", // 원형 차트
        data: {
          labels: [
            "10대 미만",
            "10대",
            "20대",
            "30대",
            "40대",
            "50대",
            "60대",
            "70대",
            "80대",
            "90대",
          ], // 레이블
          datasets: [
            {
              data: [10, 15, 20, 25, 10, 5, 5, 5, 5], // 데이터 (각 연령대 비율)
              backgroundColor: [
                "#FF6384", // 10대 색상
                "#36A2EB", // 20대 색상
                "#FFCE56", // 30대 색상
                "#4BC0C0", // 40대 색상
                "#9966FF", // 50대 색상
                "#FF9F40", // 60대 색상
                "#FF5733", // 70대 색상
                "#C70039", // 80대 색상
                "#900C3F", // 90대 색상
              ],
            },
          ],
        },
        options: {
          responsive: true, // 반응형 차트
          plugins: {
            legend: {
              position: "top", // 범례 위치
            },
          },
        },
      });
      // 성별&연령 별 클래스 수강 갯수 이중 막대 그래프 데이터
      const genderAgeCtx = document
        .getElementById("genderAgeClassChart")
        .getContext("2d");
      const genderAgeClassChart = new Chart(genderAgeCtx, {
        type: "bar", // 막대 그래프
        data: {
          labels: [
            "10대",
            "20대",
            "30대",
            "40대",
            "50대",
            "60대",
            "70대",
            "80대",
            "90대",
          ], // 레이블
          datasets: [
            {
              label: "남성",
              data: [5, 10, 15, 20, 5, 3, 2, 1, 1], // 남성 데이터
              backgroundColor: "#0096FF", // 남성 색상 (하늘색)
            },
            {
              label: "여성",
              data: [5, 5, 5, 5, 5, 2, 3, 4, 4], // 여성 데이터
              backgroundColor: "#FF9300", // 여성 색상 (주황색)
            },
          ],
        },
        options: {
          responsive: true, // 반응형 차트
          scales: {
            x: {
              stacked: true, // 막대 그래프를 쌓아서 표시
              title : {
                display : true,
                text : "연령대",
              }
            },
            y: {
              stacked: true, // 막대 그래프를 쌓아서 표시
              beginAtZero: true, // Y축 0부터 시작
              title : {
                display : true,
                text : "개 (단위)",
              },
            },
          },
          plugins: {
            legend: {
              position: "top", // 범례 위치
            },
          },
        },
      });
  
      // 카테고리 별 클래스 갯수 막대 그래프 데이터
      const categoryCtx = document
        .getElementById("categoryClassChart")
        .getContext("2d");
      const categoryClassChart = new Chart(categoryCtx, {
        type: "bar", // 막대 그래프
        data: {
          labels: ["러닝", "헬스", "클라이밍", "요가 / 필라테스", "탁구"], // 레이블
          datasets: [
            {
              label: "클래스 갯수",
              data: [12, 8, 5, 15, 3], // 각 카테고리의 클래스 갯수
              backgroundColor: "#4BC0C0", // 막대 색상
            },
          ],
        },
        options: {
          responsive: true, // 반응형 차트
          scales: {
            y: {
              beginAtZero: true, // Y축 0부터 시작
              title : {
                display : true,
                text : "개 (단위)",
              },
            },
          },
          plugins: {
            legend: {
              display: false, // 범례 숨기기
            },
          },
        },
      });
    },
  };
  </script>
  
  <style>
  .row {
    display: flex; /* Flexbox 사용 */
    flex-wrap: wrap; /* 카드가 줄 바꿈 가능하도록 설정 */
  }
  </style>