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
                          <button type="button" class="btn btn-warning mr-2" @click="openApprovalModal(index)">
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
    <!-- Approval Modal -->
    <div
      class="modal fade"
      id="approvalModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="approvalModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="approvalModalLabel">승인 확인</h5>
          </div>
          <div class="modal-body">
            해당 클래스를 승인하시겠습니까?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeApprovalModal"
            >
              취소
            </button>
            <button type="button" class="btn btn-primary" @click="modifyStatus('APPROVED')">
              승인
            </button>
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
            <h5 class="modal-title" id="rejectModalLabel">거절 확인</h5>
          </div>
          <div class="modal-body">
            해당 클래스를 거절하시겠습니까?
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
            <button type="button" class="btn btn-danger" @click="modifyStatus('REJECTED')">
              거절
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
        "아이디",
        "카테고리",
        "제목",
        "가격",
        "최대 인원",
        "요청 내용",
        "승인 / 거절",
      ],
      tableRows: [],
      selectedIndex: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/course-requests");

        this.tableRows = response.data.data.map((request) => [
          request.courseId,
          request.categoryName,
          request.courseTitle,
          request.courseTuition,
          request.maxCapacity,
          request.status,
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
    openApprovalModal(index) {
      this.selectedIndex = index;
      $("#approvalModal").modal("show");
    },
    closeApprovalModal() {
      $("#approvalModal").modal("hide");
    },
    openRejectModal(index) {
      this.selectedIndex = index;
      $("#rejectModal").modal("show");
    },
    closeRejectModal() {
      $("#rejectModal").modal("hide");
    },
    async modifyStatus(status) {
      const { patch } = useAPI();
      const selectedRequest = this.tableRows[this.selectedIndex];
      const id = selectedRequest[0];

      try {
        await patch(`/admin/course-requests/${id}/status`, status );
        console.log(`Request ${status} successful for ID:`, id);
        this.fetchData(); // Refresh the data after modification
      } catch (error) {
        console.error("상태 변경 중 오류가 발생했습니다:", error);
      } finally {
        if (status === 'APPROVAL') {
          this.closeApprovalModal();
        } else {
          this.closeRejectModal();
        }
      }
    },
  },
};
</script>
