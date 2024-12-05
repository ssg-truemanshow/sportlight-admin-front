<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">강사 전환 요청 목록</h1>
              <h4 class="card-subtitle">
                현재 가입한 회원 중에서 강사로 전환하는 요청을 보낸 목록을 확인하실 수 있습니다.
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
                      <td v-for="(cell, i) in tableRow.slice(1, 6)" :key="i">
                        {{ cell }}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning"
                          style="margin: 0 auto; display: block"
                          @click="viewRequestDetails(index)"
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

    <!-- Detail Modal -->
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
              <p>{{ modalData.hostBio }}</p>
            </div>
            <div>
              <h6>보유자격증</h6>
              <!-- <p>{{ modalData.certification }}</p> -->
              <button
                type="button"
                class="btn btn-link"
                @click="downloadCertification(modalData.certification)"
              >
                자격증 보기
              </button>
            </div>
            <div>
              <h6>포트폴리오</h6>
              <p>{{ modalData.portfolio }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="approveRequest(modalData.hostRequestId)"
            >
              승인
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="rejectRequest(modalData.hostRequestId)"
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
import { useAPI } from "@/axios/useAPI";

export default {
  data() {
    return {
      tableHeaders: [
        "닉네임",
        "로그인 아이디",
        "이름",
        "상태",
        "전환 요청 날짜",
        "요청 폼",
      ],
      tableRows: [],
      modalData: {},
    };
  },
  methods: {
    async fetchData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/host-requests");
        this.tableRows = response.data.data.map((request) => [
          request.hostRequestId,
          request.userNickname,
          request.loginId,
          request.userName,
          request.reqStatus,
          this.formatDate(request.regDate),
          request.hostBio,
          request.certification,
          request.portfolio,
        ]);
        this.fullData = response.data.data;
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
    viewRequestDetails(index) {
      this.modalData = this.fullData[index];
      $("#detailModal").modal("show");
    },
    closeModal() {
      $("#detailModal").modal("hide");
    },
    async approveRequest(id) {
      const { patch } = useAPI();
      try {
        await patch(`/admin/host-requests/${id}/status`, "APPROVED");
        alert("승인되었습니다.");
        this.fetchData();
        $("#detailModal").modal("hide");
      } catch (error) {
        console.error("승인 처리 중 오류가 발생했습니다:", error);
      }
    },
    async rejectRequest(id) {
      const { patch } = useAPI();
      try {
        await patch(`/admin/host-requests/${id}/status`, "REJECTED");
        alert("거절되었습니다.");
        this.fetchData();
        $("#detailModal").modal("hide");
      } catch (error) {
        console.error("거절 처리 중 오류가 발생했습니다:", error);
      }
    },
    async downloadCertification(id) {
      const { get } = useAPI();
      try {
        const res = await get(`/files/${id}/download`, {
          responseType: "blob",
        });
        const fileName =
            res.headers["Content-Disposition"].split("filename=")[1];
            console.log("aksjhdkajhsdkajhsdkjahskdjha",fileName);
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", decodeURI(fileName));
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("자격증 다운로드 중 오류가 발생했습니다:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}년 ${month}월 ${day}일`;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.modal-body h6 {
  margin-top: 10px;
  font-weight: bold;
}
</style>
