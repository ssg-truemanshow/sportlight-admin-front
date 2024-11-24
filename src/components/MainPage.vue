<template>
  <h1 style="margin-left: 50px">MainPage</h1>
  <div class="container-fluid">
    <div class="card-group">
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <div class="d-inline-flex align-items-center">
                <h2 class="text-dark mb-1 font-weight-medium">777 명</h2>
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
                <h2 class="text-dark mb-1 font-weight-medium">1538 개</h2>
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
                18,306 원
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
      <div class="card border-right">
        <div class="card-body">
          <div class="d-flex d-lg-flex d-md-block align-items-center">
            <div>
              <h2 class="text-dark mb-1 w-100 text-truncate font-weight-medium">
                18,306 원
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
                18,306 원
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
                18,306 원
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
            <canvas id="salesChart" style="height: 200px; width: 100%"></canvas>
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
                  <tr>
                    <td>1</td>
                    <td>Nigam</td>
                    <td>Eichmann</td>
                    <td>@Sonu</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Deshmukh</td>
                    <td>Prohaska</td>
                    <td>@Genelia</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Roshan</td>
                    <td>Rogahn</td>
                    <td>@Hritik</td>
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
                  <tr>
                    <td>1</td>
                    <td>Nigam</td>
                    <td>Eichmann</td>
                    <td>@Sonu</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Deshmukh</td>
                    <td>Prohaska</td>
                    <td>@Genelia</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Roshan</td>
                    <td>Rogahn</td>
                    <td>@Hritik</td>
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

Chart.register(...registerables); // Chart.js의 모든 구성 요소 등록
export default {
  mounted() {
    // Feather Icons 초기화
    feather.replace();

    // 매출 추이
    // 차트 데이터 생성
    const data = [];
    let prev = 100; // 초기값 설정
    const startDate = new Date(); // 시작 날짜 설정

    for (let i = 0; i < 100; i++) {
      // 데이터 포인트 수를 100으로 줄임
      const date = new Date(startDate); // 시작 날짜 복사
      date.setDate(startDate.getDate() + i); // 날짜 증가
      const price = prev + (5 - Math.random() * 10); // 랜덤한 가격 생성
      data.push({ x: date, y: price }); // 데이터 포인트 추가
      prev = price; // 이전 가격 업데이트
    }

    // 애니메이션 설정
    const totalDuration = 3000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
            .getDatasetMeta(ctx.datasetIndex)
            .data[ctx.index - 1].getProps(["y"], true).y;

    const animation = {
      x: {
        type: "number",
        easing: "linear",
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== "data" || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
      y: {
        type: "number",
        easing: "linear",
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== "data" || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
    };

    // 차트 설정
    const config = {
      type: "line",
      data: {
        datasets: [
          {
            label: "매출 추이", // 데이터셋 레이블 추가
            borderColor: "#0096FF", // 데이터셋 색상
            borderWidth: 1,
            radius: 0,
            data: data, // 단일 데이터셋
          },
        ],
      },
      options: {
        animation,
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            type: "time", // X축을 시간으로 설정
            time: {
              unit: "day", // 날짜 단위로 설정
              tooltipFormat: "MMM d, yyyy", // 툴팁 형식
              displayFormats: {
                day: "MMM d", // X축에 표시될 날짜 형식
              },
            },
            title: {
              display: true,
              text: "날짜", // X축 레이블
            },
          },
          y: {
            title: {
              display: true,
              text: "가격 (원)", // Y축 레이블
            },
          },
        },
      },
    };

    // 차트 생성
    const ctx = document.getElementById("salesChart").getContext("2d");
    new Chart(ctx, config);



    // 클래스 변동 추이 차트 데이터 생성
    const classData = [];
    let prevClasses = 50; // 초기값 설정
    const classStartDate = new Date(); // 시작 날짜 설정

    for (let i = 0; i < 100; i++) { // 100일 데이터 생성
      const date = new Date(classStartDate);
      date.setDate(classStartDate.getDate() + i); // 날짜 증가
      const classChange = Math.floor(Math.random() * 20) - 10; // -10에서 10 사이의 랜덤 변화량
      const classCount = Math.max(0, prevClasses + classChange); // 클래스 수가 0 이하로 떨어지지 않도록 설정
      classData.push({ x: date, y: classCount });
      prevClasses = classCount; // 이전 클래스 수 업데이트
    }

    // 클래스 차트 설정
    const classConfig = {
      type: "line",
      data: {
        datasets: [
          {
            label: "클래스 갯수",
            borderColor: "#FF9300",
            borderWidth: 1,
            radius: 0,
            data: classData,
          },
        ],
      },
      options: {
        animation, // 동일한 애니메이션 설정 사용
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: false,
        },
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
              text: "클래스 갯수",
            },
          },
        },
      },
    };

    // 클래스 차트 생성
    const classCtx = document.getElementById("classchart").getContext("2d");
    new Chart(classCtx, classConfig);
  },
};
</script>

<style></style>
