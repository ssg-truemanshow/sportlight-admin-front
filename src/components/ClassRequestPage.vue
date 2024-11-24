<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">클래스 등록 및 삭제 요청 목록</h1>
              <h4 class="card-subtitle">
                강사들이 새로 개설하려고 하는 클래스에 대한 등록 요청과 활성화
                되어 있던 클래스에 대한 삭제 요청을 확인하실 수 있습니다.
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
                      <td v-for="(cell, i) in tableRow" :key="i">{{ cell }}</td>
                      <td>
                        <div
                          class="btn-group d-flex justify-content-center"
                          role="group"
                          aria-label="Approval Buttons"
                        >
                          <button type="button" class="btn btn-warning mr-2">
                            <i class="far fa-thumbs-up"></i> 승인
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="openRejectModal(index)"
                          >
                            <i class="far fa-thumbs-down"></i> 거절
                          </button>
                        </div>
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
    <!-- Reject Modal -->
    <div
      class="modal fade"
      id="rejectModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="rejectModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rejectModalLabel">거절 사유</h5>
          </div>
          <div class="modal-body">
            <p>
              해당 클래스를 거절하시겠습니까?<br />이메일을 통해 사유를 설명할
              수 있습니다.
            </p>
            <div class="form-group">
              <label for="rejectReason">거절 사유를 입력하세요:</label>
              <textarea
                id="rejectReason"
                class="form-control"
                v-model="rejectReason"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeRejectModal"
            >
              취소
            </button>
            <button type="button" class="btn btn-primary" @click="sendEmail(index)">
              이메일 보내기
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
          "카테고리",
          "제목",
          "가격",
          "최대 인원",
          "요청 내용",
          "승인 / 거절",
        ],
        data: [
          {
            Category: "요가",
            Title: "초급 요가 클래스",
            Price: "30,000원",
            MaxPeople: 10,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "필라테스",
            Title: "필라테스 기본 동작",
            Price: "40,000원",
            MaxPeople: 8,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "댄스",
            Title: "K-POP 댄스 클래스",
            Price: "35,000원",
            MaxPeople: 15,
            RequestContent: "삭제 요청",
          },
          {
            Category: "수영",
            Title: "자유형 마스터 클래스",
            Price: "50,000원",
            MaxPeople: 12,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "헬스",
            Title: "근력 운동 기초",
            Price: "45,000원",
            MaxPeople: 20,
            RequestContent: "삭제 요청",
          },
          {
            Category: "스피닝",
            Title: "스피닝 초급 클래스",
            Price: "25,000원",
            MaxPeople: 10,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "명상",
            Title: "마음 챙김 명상",
            Price: "20,000원",
            MaxPeople: 30,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "축구",
            Title: "축구 기본 기술 연습",
            Price: "35,000원",
            MaxPeople: 25,
            RequestContent: "삭제 요청",
          },
          {
            Category: "테니스",
            Title: "초보자 테니스 레슨",
            Price: "60,000원",
            MaxPeople: 8,
            RequestContent: "신규 개설 요청",
          },
          {
            Category: "복싱",
            Title: "복싱 입문 클래스",
            Price: "55,000원",
            MaxPeople: 10,
            RequestContent: "삭제 요청",
          },
        ],
      },
      tableHeaders: [],
      tableRows: [],
      rejectReason: "",
    };
  },
  created() {
    // JSON 데이터를 props 형식으로 변환
    this.tableHeaders = this.jsonData.columns;
    this.tableRows = this.jsonData.data.map((row) => Object.values(row));
  },
  methods: {
    openRejectModal(index) {
      // Show the reject modal
      $("#rejectModal").modal("show");
    },
    sendEmail(index) {
      if (this.rejectReason.trim() === "") {
        alert("거절 사유를 입력해주세요.");
        return;
      }
      // Logic to send the email with the reject reason goes here
      console.log("Sending email with reason:", this.rejectReason);
      // After sending the email, close the modal
      $("#rejectModal").modal("hide");
      this.rejectReason = ""; // Clear the reason after sending
    },
    closeRejectModal() {
      $("#rejectModal").modal("hide");
    },
  },
};
</script>
