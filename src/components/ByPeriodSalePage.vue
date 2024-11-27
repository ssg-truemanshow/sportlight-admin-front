<!-- <template>
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
                    <tr v-for="(tableRow, index) in tableRows" :key="index">
                      <td v-for="(cell, i) in tableRow" :key="i">
                        {{ cell }}
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
  </div>
</template>

<script>
import { useAPI } from "@/axios/useAPI"
export default {
  data() {
    return {
      jsonData: {
        daily: {
          columns: [
            "매출 아이디",
            "매출 금액",
            "부가 가치세",
            "기타 수익",
            "순 매출금액",
            "생성 날짜",
          ],
          data: [
            ["D001", 10000, 1000, 500, 8500, "2024-11-10"],
            ["D002", 20000, 2000, 800, 17200, "2024-11-11"],
            ["D003", 15000, 1500, 600, 12900, "2024-11-12"],
            ["D004", 18000, 1800, 700, 15500, "2024-11-13"],
            ["D005", 22000, 2200, 900, 18900, "2024-11-14"],
          ],
        },
        monthly: {
          columns: [
            "매출 아이디",
            "매출 금액",
            "부가 가치세",
            "기타 수익",
            "순 매출금액",
            "생성 날짜",
          ],
          data: [
            ["M001", 300000, 30000, 15000, 255000, "2024-11"],
            ["M002", 400000, 40000, 20000, 340000, "2024-12"],
            ["M003", 350000, 35000, 17000, 298000, "2025-01"],
            ["M004", 450000, 45000, 22000, 383000, "2025-02"],
            ["M005", 500000, 50000, 25000, 425000, "2025-03"],
          ],
        },
        yearly: {
          columns: [
            "매출 아이디",
            "매출 금액",
            "부가 가치세",
            "기타 수익",
            "순 매출금액",
            "생성 날짜",
          ],
          data: [
            ["Y001", 5000000, 500000, 250000, 4250000, "2024"],
            ["Y002", 6000000, 600000, 300000, 5100000, "2025"],
            ["Y003", 5500000, 550000, 275000, 4675000, "2026"],
            ["Y004", 7000000, 700000, 350000, 5950000, "2027"],
            ["Y005", 7500000, 750000, 375000, 6375000, "2028"],
          ],
        },
      },
      tableHeaders: [],
      tableRows: [],
      selectedPeriod: "daily",
    };
  },
  created() {
    this.updateTable();
  },
  methods: {
    updateTable() {
      const selectedData = this.jsonData[this.selectedPeriod];
      this.tableHeaders = selectedData.columns;
      this.tableRows = selectedData.data;
    },
  },
};
</script>

<style scoped></style> -->

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
                    <tr v-for="(tableRow, index) in tableRows" :key="index">
                      <td v-for="(cell, i) in tableRow" :key="i">
                        {{ cell }}
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
    };
  },
  created() {
    this.fetchSalesData();
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
          this.salesData.daily = (salesData.dailySales || []).map(sale => [
            sale.id,
            sale.totalAmount,
            sale.vat,
            sale.additionalRevenue,
            sale.netRevenue,
            sale.dsdate,
          ]);

          // 월별 매출 데이터 처리
          this.salesData.monthly = (salesData.monthlySales || []).map(sale => [
            sale.id,
            sale.totalAmount,
            sale.vat,
            sale.additionalRevenue,
            sale.netRevenue,
            sale.dsdate,
          ]);

          // 연별 매출 데이터 처리
          this.salesData.yearly = (salesData.yearlySales || []).map(sale => [
            sale.id,
            sale.totalAmount,
            sale.vat,
            sale.additionalRevenue,
            sale.netRevenue,
            sale.dsdate,
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
      console.log("Table Rows After Update: ", this.tableRows);
    },
  },
};
</script>

<style scoped></style>