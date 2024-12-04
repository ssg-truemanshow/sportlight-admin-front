<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div>
                  <h1 class="card-title">매출 내역</h1>
                  <h4 class="card-subtitle">
                    SportLight 플랫폼을 통한 현재까지의 일별, 월별, 연별에 대해
                    매출 내역을 확인할 수 있습니다.
                  </h4>
                </div>
                <div>
                  <select v-model="selectedPeriod" @change="updateTable">
                    <option value="daily">일별</option>
                    <option value="monthly">월별</option>
                    <option value="yearly">연별</option>
                  </select>
                </div>
              </div>
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
                    <tr v-for="(tableRow, index) in paginatedRows" :key="index">
                      <td v-for="(cell, i) in tableRow" :key="i">
                        {{ cell }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="pagination-controls">
                <button @click="prevPage" :disabled="currentPage === 1">PREVIOUS</button>
                <span>{{ currentPage }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">NEXT</button>
              </div>
            </div>
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
      salesData: {
        daily: [],
        monthly: [],
        yearly: [],
      },
      tableHeaders: [
        "매출 아이디",
        "매출 금액",
        "부가 가치세",
        "기타 수익",
        "순 매출금액",
        "생성 날짜",
      ],
      tableRows: [],
      selectedPeriod: "daily",
      currentPage: 1,
      rowsPerPage: 10,
    };
  },
  created() {
    this.fetchSalesData();
  },
  computed: {
    paginatedRows() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.tableRows.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.tableRows.length / this.rowsPerPage);
    },
  },
  methods: {
    async fetchSalesData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/sales");

        console.log("Full Response: ", response);
        console.log("Response Data: ", response.data);

        // 응답 데이터 안전하게 처리
        if (response.data && response.data.data) {
          const salesData = response.data.data;

          // 일별 매출 데이터 처리
          this.salesData.daily = (salesData.dailySales || []).map((sale) => [
            sale.id,
            this.formatCurrency(sale.totalAmount),
            this.formatCurrency(sale.vat),
            this.formatCurrency(sale.additionalRevenue),
            this.formatCurrency(sale.netRevenue),
            this.formatDate(sale.dsdate),
          ]);

          // 월별 매출 데이터 처리
          this.salesData.monthly = (salesData.monthlySales || []).map((sale) => [
            sale.id,
            this.formatCurrency(sale.totalAmount),
            this.formatCurrency(sale.vat),
            this.formatCurrency(sale.additionalRevenue),
            this.formatCurrency(sale.netRevenue),
            this.formatDate(sale.dsdate),
          ]);

          // 연별 매출 데이터 처리
          this.salesData.yearly = (salesData.yearlySales || []).map((sale) => [
            sale.id,
            this.formatCurrency(sale.totalAmount),
            this.formatCurrency(sale.vat),
            this.formatCurrency(sale.additionalRevenue),
            this.formatCurrency(sale.netRevenue),
            this.formatDate(sale.dsdate),
          ]);

          console.log("Processed Sales Data: ", this.salesData);

          // 초기 테이블 업데이트
          this.updateTable();
        } else {
          console.error("No sales data found in the response");
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
    updateTable() {
      console.log("Selected Period: ", this.selectedPeriod);
      console.log("Table Rows Before Update: ", this.tableRows);
      this.tableRows = this.salesData[this.selectedPeriod];
      this.currentPage = 1; // 페이지 초기화
      console.log("Table Rows After Update: ", this.tableRows);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
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

<style scoped>
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination-controls button {
  margin: 0 10px;
  padding: 5px 15px;
}
</style>
