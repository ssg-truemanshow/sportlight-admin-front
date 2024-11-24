<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">강사 전환 요청 목록</h1>
              <h4 class="card-subtitle">
                현재 가입한 회원 중에서 강사로 전환하는 요청을 보낸 목록을
                확인하실 수 있습니다.
              </h4>
              <div class="table-responsive">
                <table
                  id="zero_config"
                  class="table table-striped table-bordered no-wrap"
                >
                  <thead>
                    <tr>
                      <th
                        v-for="(tableHeader, index) in tableHeaders"
                        :key="index"
                      >
                        {{ tableHeader }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tableRow, index) in tableRows" :key="index">
                      <td v-for="(cell, i) in tableRow.slice(0, 5)" :key="i">
                        {{ cell }}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning"
                          style="margin: 0 auto; display: block"
                          @click="openModal(index)"
                        >
                          <i class="far fa-envelope-open"></i> 자세히 보기
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="detailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="detailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModalLabel">요청 폼</h5>
          </div>
          <div class="modal-body">
            <div>
              <h6>소개글</h6>
              <p>{{ modalData.introduction }}</p>
            </div>
            <div>
              <h6>보유자격증</h6>
              <p>{{ modalData.certifications }}</p>
            </div>
            <div>
              <h6>포트폴리오</h6>
              <p>{{ modalData.portfolio }}</p>
            </div>
            <div>
              <h6>거절 사유</h6>
              <textarea
                v-model="rejectionReason"
                class="form-control"
                rows="3"
                placeholder="거절 사유를 입력하세요"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="approveRequest"
            >
              승인
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="submitRejection"
            >
              거절
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: {
        columns: [
          "닉네임",
          "로그인 아이디",
          "이름",
          "상태",
          "전환 요청 날짜",
          "요청 폼",
        ],
        data: [
          {
            Nickname: "요가왕",
            LoginId: "yogaking",
            Name: "김철수",
            Status: "승인 대기",
            RequestDate: "2024-11-01",
            introduction: "요가를 사랑하는 김철수입니다.",
            certifications: "요가 지도자 2급",
            portfolio: "요가 강의 경력 3년",
          },
          {
            Nickname: "필라테스러버",
            LoginId: "pilateslove",
            Name: "이영희",
            Status: "승인 완료",
            RequestDate: "2024-11-02",
            introduction: "필라테스를 통해 건강을 찾은 이영희입니다.",
            certifications: "필라테스 지도자 1급",
            portfolio: "필라테스 강의 경력 5년",
          },
          {
            Nickname: "댄스퀸",
            LoginId: "dancequeen",
            Name: "박민지",
            Status: "승인 거절",
            RequestDate: "2024-11-03",
            introduction: "춤을 좋아하는 박민지입니다.",
            certifications: "댄스 강사 1급",
            portfolio: "댄스 경력 4년",
          },
          {
            Nickname: "수영인",
            LoginId: "swimmer",
            Name: "최수영",
            Status: "승인 대기",
            RequestDate: "2024-11-04",
            introduction: "수영을 즐기는 최수영입니다.",
            certifications: "수영 지도자 3급",
            portfolio: "수영 강의 경력 2년",
          },
          {
            Nickname: "헬스매니아",
            LoginId: "healthmania",
            Name: "장건강",
            Status: "승인 완료",
            RequestDate: "2024-11-05",
            introduction: "헬스를 사랑하는 장건강입니다.",
            certifications: "헬스 트레이너 2급",
            portfolio: "헬스 트레이닝 경력 6년",
          },
          {
            Nickname: "스피닝챔프",
            LoginId: "spinningchamp",
            Name: "김지훈",
            Status: "승인 거절",
            RequestDate: "2024-11-06",
            introduction: "스피닝을 좋아하는 김지훈입니다.",
            certifications: "스피닝 강사 1급",
            portfolio: "스피닝 강의 경력 3년",
          },
          {
            Nickname: "명상가",
            LoginId: "meditator",
            Name: "이명상",
            Status: "승인 대기",
            RequestDate: "2024-11-07",
            introduction: "명상을 즐기는 이명상입니다.",
            certifications: "명상 지도자 2급",
            portfolio: "명상 강의 경력 4년",
          },
          {
            Nickname: "축구소년",
            LoginId: "soccerboy",
            Name: "박지성",
            Status: "승인 완료",
            RequestDate: "2024-11-08",
            introduction: "축구를 좋아하는 박지성입니다.",
            certifications: "축구 코치 1급",
            portfolio: "축구 코칭 경력 5년",
          },
          {
            Nickname: "테니스팬",
            LoginId: "tennisfan",
            Name: "정테니스",
            Status: "승인 대기",
            RequestDate: "2024-11-09",
            introduction: "테니스를 사랑하는 정테니스입니다.",
            certifications: "테니스 지도자 2급",
            portfolio: "테니스 강의 경력 3년",
          },
          {
            Nickname: "복싱챔피언",
            LoginId: "boxingchamp",
            Name: "최강타",
            Status: "승인 거절",
            RequestDate: "2024-11-10",
            introduction: "복싱을 좋아하는 최강타입니다.",
            certifications: "복싱 지도자 1급",
            portfolio: "복싱 강의 경력 4년",
          },
        ],
      },
      tableHeaders: [],
      tableRows: [],
      modalData: {
        introduction: "",
        certifications: "",
        portfolio: "",
      },
      rejectionReason: "",
    };
  },
  created() {
    // JSON 데이터를 props 형식으로 변환
    this.tableHeaders = this.jsonData.columns;
    this.tableRows = this.jsonData.data.map((row) => Object.values(row));
  },
  methods: {
    openModal(index) {
      const rowData = this.jsonData.data[index];
      this.modalData.introduction = rowData.introduction;
      this.modalData.certifications = rowData.certifications;
      this.modalData.portfolio = rowData.portfolio;
      this.rejectionReason = "";
      $("#detailModal").modal("show");
    },
    closeModal(){
      $("#detailModal").modal("hide");
    },
    approveRequest() {
      // 승인 처리 로직 추가
      alert("승인되었습니다.");
      $("#detailModal").modal("hide");
    },
    submitRejection() {
      if (this.rejectionReason) {
        // 이메일 전송 로직 추가 (예시)
        alert(`거절 사유: ${this.rejectionReason}가 이메일로 전송되었습니다.`);
        $("#detailModal").modal("hide");
      } else {
        alert("거절 사유를 입력해주세요.");
      }
    },
  },
};
</script>

<style scoped>
.modal-body h6 {
  margin-top: 10px;
  font-weight: bold;
}
</style>
