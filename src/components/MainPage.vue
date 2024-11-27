<template>
  <h1 style="margin-left: 50px">MainPage</h1>
  <div class="container-fluid">
    <div class="card-group">
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <div class="d-inline-flex align-items-center">
                <h2 class="text-dark mb-1 font-weight-medium">
                  {{ userCount }} 명
                </h2>
              </div>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                전체 회원수
              </h6>
            </div>
            <div class="ml-auto mt-md-3 mt-lg-0">
              <span class="opacity-7 text-muted"
                ><i data-feather="user-plus"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <div class="d-inline-flex align-items-center">
                <h2 class="text-dark mb-1 font-weight-medium">
                  {{ courseCount }} 개
                </h2>
              </div>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                클래스 갯수
              </h6>
            </div>
            <div class="ml-auto mt-md-3 mt-lg-0">
              <span class="opacity-7 text-muted"
                ><i data-feather="file-plus"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <h2 class="text-dark mb-1 w-100 text-truncate font-weight-medium">
                {{ totalDailySaleAmount }} 원
              </h2>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                총 매출
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-group">
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <h2 class="text-dark mb-1 w-100 text-truncate font-weight-medium">
                {{ averageDailySaleAmount }} 원
              </h2>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                평균 일 매출
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <h2 class="text-dark mb-1 w-100 text-truncate font-weight-medium">
                {{ averageMonthlySaleAmount }} 원
              </h2>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                평균 월 매출
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <h2 class="text-dark mb-1 w-100 text-truncate font-weight-medium">
                {{ averageYearlySaleAmount }} 원
              </h2>
              <h6
                class="text-muted font-weight-normal mb-0 w-100 text-truncate"
              >
                평균 연 매출
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">일일 매출 동향</h4>
            <canvas
              id="dailySalesChart"
              style="height: 200px; width: 100%"
            ></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">클래스 변동 추이</h4>
            <canvas id="classchart" style="height: 200px; width: 100%"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">클래스 TOP 3</h4>
            <h6 class="card-subtitle">
              현재 활성화된 클래스 중 수강생이 가장 많은 클래스 3개를
              보여줍니다.
            </h6>
            <div class="table-responsive">
              <table class="table">
                <thead class="bg-info text-white">
                  <tr>
                    <th>#</th>
                    <th>클래스 제목</th>
                    <th>클래스 카테고리</th>
                    <th>클래스 가격</th>
                  </tr>
                </thead>
                <tbody class="border border-info">
                  <tr
                    v-for="(course, index) in courseTop.slice(0, 3)"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ course.title }}</td>
                    <td>{{ course.category }}</td>
                    <td>{{ course.tuition }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">강사 TOP 3</h4>
            <h6 class="card-subtitle">
              강사 중에서 현재까지 정산 금액이 가장 많은 3명을 보여줍니다.
            </h6>
            <div class="table-responsive">
              <table class="table">
                <thead class="bg-warning text-white">
                  <tr>
                    <th>#</th>
                    <th>로그인 아이디</th>
                    <th>이메일</th>
                    <th>누적 정산 금액</th>
                  </tr>
                </thead>
                <tbody class="border border-warning">
                  <tr v-for="(host, index) in hostTop.slice(0, 3)" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ host.loginId }}</td>
                    <td>{{ host.userNickname }}</td>
                    <td>{{ host.userName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns"; // 날짜 어댑터 추가
import feather from "feather-icons";
import { useAPI } from "@/axios/useAPI"; // API 유틸리티 import

Chart.register(...registerables); // Chart.js의 모든 구성 요소 등록

export default {
  data() {
    return {
      userCount: 0,
      courseCount: 0,
      totalDailySaleAmount: 0,
      averageDailySaleAmount: 0,
      averageMonthlySaleAmount: 0,
      averageYearlySaleAmount: 0,
      allDailySales: [],
      openCourseCounts: [],
      courseTop: [],
      hostTop: [],
    };
  },
  created() {
    this.fetchMainData();
  },
  methods: {
    async fetchMainData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/main");
        console.log(response.data);
        if (response.data && response.data.data) {
          this.userCount = response.data.data.userCount || 0;
          this.courseCount = response.data.data.courseCount || 0;
          this.totalDailySaleAmount =
            Number(response.data.data.totalDailySale) ?? 0;
          this.averageDailySaleAmount =
            Number(response.data.data.averageDailySale) ?? 0;
          this.averageMonthlySaleAmount =
            Number(response.data.data.averageMonthlySale) ?? 0;
          this.averageYearlySaleAmount =
            Number(response.data.data.averageYearlySale) ?? 0;
          this.allDailySales = response.data.data.allDailySales || [];
          this.openCourseCounts = response.data.data.openCourseCounts.map(
            (item) => ({
              startTime: new Date(item[0]), // 타임스탬프를 Date 객체로 변환
              count: item[1], // 수업 개수
            })
          );
          this.courseTop = response.data.data.courseTop || [];
          this.hostTop = response.data.data.hostTop || [];
          console.log("Host Top 데이터:", this.hostTop);

          // 데이터가 로드된 후 차트를 생성
          this.createDailySalesChart();
          this.createOpenCourseChart();
        }
      } catch (error) {
        console.error("메인 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
    createDailySalesChart() {
      if (this.allDailySales.length === 0) {
        console.warn("일일 매출 데이터가 없습니다.");
        return;
      }

      // allDailySales 데이터를 차트 데이터 형식에 맞게 변환
      const salesData = this.allDailySales.map((sale) => ({
        x: new Date(
          sale.dsdate[0],
          sale.dsdate[1] - 1,
          sale.dsdate[2],
          sale.dsdate[3],
          sale.dsdate[4]
        ), // dsdate 배열을 Date 객체로 변환
        y: Number(sale.totalAmount), // 매출 금액을 숫자로 변환
      }));

      const ctx = document.getElementById("dailySalesChart").getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label: "일일 매출 추이",
              data: salesData,
              borderColor: "#42A5F5", // 선 색상
              backgroundColor: "rgba(66, 165, 245, 0.2)", // 영역 배경 색상 (투명도 추가)
              borderWidth: 2,
              tension: 0.3, // 부드러운 곡선 효과
              fill: true, // 선 아래 부분 채우기
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true, // 차트 비율 유지
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", // 일 단위로 설정
                tooltipFormat: "MMM d, yyyy", // 툴팁 형식
                displayFormats: {
                  day: "MMM d", // X축에 표시될 날짜 형식
                },
              },
              title: {
                display: true,
                text: "날짜",
              },
            },
            y: {
              title: {
                display: true,
                text: "매출 금액 (원)",
              },
              beginAtZero: true, // Y축을 0부터 시작
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          animation: {
            duration: 1000, // 애니메이션 지속 시간 (1초)
            easing: "easeInOutQuad", // 애니메이션 효과
          },
        },
      });
    },

    createOpenCourseChart() {
      if (this.openCourseCounts.length === 0) {
        console.warn("클래스 데이터가 없습니다.");
        return;
      }

      // openCourseCounts 데이터를 차트 데이터 형식에 맞게 변환
      const courseData = this.openCourseCounts.map((course) => ({
        x: course.startTime, // 수업 시작 시간
        y: course.count, // 수업 개수
      }));

      const ctx = document.getElementById("classchart").getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: "날짜별 클래스 개수",
              data: courseData,
              backgroundColor: "#FFA726", // 막대 색상
              borderColor: "#FB8C00", // 막대 테두리 색상
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true, // 차트 비율 유지
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", // 일 단위로 설정
                tooltipFormat: "MMM d, yyyy", // 툴팁 형식
                displayFormats: {
                  day: "MMM d", // X축에 표시될 날짜 형식
                },
              },
              title: {
                display: true,
                text: "날짜",
              },
            },
            y: {
              title: {
                display: true,
                text: "클래스 개수",
              },
              beginAtZero: true, // Y축을 0부터 시작
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          animation: {
            duration: 1000, // 애니메이션 지속 시간 (1초)
            easing: "easeInOutQuad", // 애니메이션 효과
          },
        },
      });
    },
  },
  mounted() {
    // Feather Icons 초기화
    feather.replace();
  },
};
</script>

<style></style>
