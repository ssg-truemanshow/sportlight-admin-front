<template>
  <!-- <h1 style="margin-left: 50px">Dashboard Page</h1> -->
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
          <canvas id="courseLocationChart" style="height: 500px; width: 100%"></canvas>
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
import { Chart, registerables } from "chart.js";
import { useAPI } from "@/axios/useAPI";

Chart.register(...registerables);

export default {
  data() {
    return {
      userRoleCount: {},
      userAgeGroupCount: {},
      genderAgeGroupCourseCount: [],
      courseLocation: [],
      categoryCourseCount: null,
    };
  },
  created() {
    this.fetchDashboardData();
  },
  methods: {
    async fetchDashboardData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/dashboard");
        if (response.data && response.data.data) {
          this.userRoleCount = response.data.data.userRoleCount || {};
          this.userAgeGroupCount = response.data.data.userAgeGroupCount || {};
          this.genderAgeGroupCourseCount =
            response.data.data.genderAgeGroupCourseCountDTO || [];
          this.courseLocation = response.data.data.courseLocationDTO || [];
          this.categoryCourseCount =
            response.data.data.categoryCourseCountDTO || []; // categoryCourseCount 데이터 저장
          console.log("categoryCourseCount 데이터:", this.categoryCourseCount); // categoryCourseCount 데이터 확인
          this.updateInstructorMemberChart();
          this.updateAgeDistributionChart();
          this.updateGenderAgeGroupCourseChart();
          this.initCategoryChart();
          this.initCourseLocationChart();
        }
      } catch (error) {
        console.error(
          "대시보드 데이터를 불러오는 중 오류가 발생했습니다:",
          error
        );
      }
    },
    initCategoryChart() {
      const ctx = document
        .getElementById("categoryClassChart")
        .getContext("2d");
      const labels = this.categoryCourseCount.map((item) => item.categoryName);
      const data = this.categoryCourseCount.map((item) => item.courseCount);

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "클래스 갯수",
              data: data,
              backgroundColor: "#4BC0C0",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "개 (단위)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    },
    updateInstructorMemberChart() {
      const { userAndHostRoleCount, userRoleOnlyCount } = this.userRoleCount;
      const total = userAndHostRoleCount + userRoleOnlyCount;
      const data = [
        (userAndHostRoleCount / total) * 100,
        (userRoleOnlyCount / total) * 100,
      ];

      // 강사&회원 비율 원형 차트 데이터
      const ctx = document
        .getElementById("instructorMemberChart")
        .getContext("2d");
      new Chart(ctx, {
        type: "pie", // 원형 차트
        data: {
          labels: ["강사", "회원"], // 레이블
          datasets: [
            {
              data: data, // 데이터 (강사와 회원 비율)
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
    },
    updateAgeDistributionChart() {
      const {
        teensCount,
        twentiesCount,
        thirtiesCount,
        fortiesCount,
        fiftiesCount,
        sixtiesCount,
        seventiesCount,
        eightiesCount,
        ninetiesCount,
      } = this.userAgeGroupCount;
      const data = [
        teensCount,
        twentiesCount,
        thirtiesCount,
        fortiesCount,
        fiftiesCount,
        sixtiesCount,
        seventiesCount,
        eightiesCount,
        ninetiesCount,
      ];

      // 연령 별 유저 비율 원형 차트 데이터
      const ageCtx = document
        .getElementById("ageDistributionChart")
        .getContext("2d");
      new Chart(ageCtx, {
        type: "pie", // 원형 차트
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
              data: data, // 데이터 (각 연령대 비율)
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
    },
    updateGenderAgeGroupCourseChart() {
      const labels = [
        "10대",
        "20대",
        "30대",
        "40대",
        "50대",
        "60대",
        "70대",
        "80대",
        "90대",
      ];

      const maleData = new Array(9).fill(0);
      const femaleData = new Array(9).fill(0);

      this.genderAgeGroupCourseCount.forEach((item) => {
        const ageIndex = labels.indexOf(item.ageGroup);
        if (ageIndex !== -1) {
          if (item.gender === "남자") {
            maleData[ageIndex] = item.courseCount;
          } else if (item.gender === "여자") {
            femaleData[ageIndex] = item.courseCount;
          }
        }
      });

      // 성별&연령 별 클래스 수강 갯수 이중 막대 그래프 데이터
      const genderAgeCtx = document
        .getElementById("genderAgeClassChart")
        .getContext("2d");
      new Chart(genderAgeCtx, {
        type: "bar", // 막대 그래프
        data: {
          labels: labels, // 레이블
          datasets: [
            {
              label: "남성",
              data: maleData, // 남성 데이터
              backgroundColor: "#0096FF", // 남성 색상 (하늘색)
            },
            {
              label: "여성",
              data: femaleData, // 여성 데이터
              backgroundColor: "#FF9300", // 여성 색상 (주황색)
            },
          ],
        },
        options: {
          responsive: true, // 반응형 차트
          scales: {
            x: {
              stacked: true, // 막대 그래프를 쌓아서 표시
              title: {
                display: true,
                text: "연령대",
              },
            },
            y: {
              stacked: true, // 막대 그래프를 쌓아서 표시
              beginAtZero: true, // Y축 0부터 시작
              title: {
                display: true,
                text: "개 (단위)",
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
    },
    initCourseLocationChart() {
      const ctx = document
        .getElementById("courseLocationChart")
        .getContext("2d");
      const data = this.courseLocation.map((item) => ({
        x: item.longitude,
        y: item.latitude,
        r: item.courseCount, // 버블 크기는 클래스 수로 설정
      }));

      new Chart(ctx, {
        type: "bubble",
        data: {
          datasets: [
            {
              label: "지역별 클래스 현황",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "경도",
              },
            },
            y: {
              title: {
                display: true,
                text: "위도",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    },
  },
};
</script>

<style>
.row {
  display: flex; /* Flexbox 사용 */
  flex-wrap: wrap; /* 카드가 줄 바꿈 가능하도록 설정 */
}
</style>
