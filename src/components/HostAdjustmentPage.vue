<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">강사 정산 요청 목록</h1>
              <h4 class="card-subtitle">
                강사들이 개설하여 운영을 함으로써 클래스를 통해 얻은 수익에 대한 정산 요청 목록입니다.
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
            해당 정산을 승인하시겠습니까?
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
            <button type="button" class="btn btn-primary" @click="modifyStatus('APPROVAL')">
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
            해당 정산을 거절하시겠습니까?
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
            <button type="button" class="btn btn-danger" @click="modifyStatus('FAIL')">
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
        "정산 아이디",
        "회원 아이디",
        "요청 정산액",
        "정산 수수료",
        "요청 날짜",
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
        const response = await get("/admin/adjustments");

        this.tableRows = response.data.data.map((settlement) => [
          settlement.adjustmentId,
          settlement.userId,
          this.formatCurrency(settlement.requestAmount),
          this.formatCurrency(settlement.adjustedCharge),
          this.formatDate(settlement.reqDate),
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
      const selectedSettlement = this.tableRows[this.selectedIndex];
      const adjustmentId = selectedSettlement[0];
      try {
        await patch(`/admin/adjustments/${adjustmentId}/status`, status );
        this.fetchData();
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}년 ${month}월 ${day}일`;
    },
    formatCurrency(value) {
      return `${value.toLocaleString()}원`;
    },
  },
};
</script>
