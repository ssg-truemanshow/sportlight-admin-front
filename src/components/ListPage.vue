<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">{{ descOfPage[0] }}</h1>
              <h4 class="card-subtitle">
                {{ descOfPage[1] }}
              </h4>
              <!-- 검색어 입력 -->
              <div
                class="search-container"
                style="margin-bottom: 20px; text-align: right"
              >
                <input
                  type="text"
                  v-model.trim="searchQuery"
                  placeholder="Search..."
                  style="
                    padding: 5px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                  "
                />
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
                        @click="sortTable(index)"
                        style="cursor: pointer"
                      >
                        {{ tableHeader }}
                        <span v-if="sortKey === index">
                          {{ sortOrder === "asc" ? "▲" : "▼" }}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tableRow, index) in paginatedRows" :key="index">
                      <td v-for="(cell, i) in tableRow" :key="i">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 페이지네이션 -->
              <div class="pagination-container">
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                >
                  Previous
                </button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                  @click="changePage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableRows: {
      type: Array,
      required: true,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    descOfPage: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      itemsPerPage: 10, // 기본 항목 수는 10개로 고정
      currentPage: 1, // 현재 페이지
      searchQuery: "", // 검색어
      sortKey: null, // 현재 정렬 기준이 되는 열 인덱스
      sortOrder: "asc", // 정렬 순서 (asc: 오름차순, desc: 내림차순)
    };
  },
  computed: {
    // 검색어에 따라 필터링된 행 계산
    filteredRows() {
      if (this.searchQuery) {
        const lowerSearchQuery = this.searchQuery.toLowerCase();
        return this.tableRows.filter((row) =>
          row.some((cell) =>
            cell.toString().toLowerCase().includes(lowerSearchQuery)
          )
        );
      } else {
        return this.tableRows;
      }
    },
    // 정렬된 행을 계산
    sortedRows() {
      if (this.sortKey !== null) {
        return [...this.filteredRows].sort((a, b) => {
          const aValue = a[this.sortKey];
          const bValue = b[this.sortKey];

          if (aValue < bValue) {
            return this.sortOrder === "asc" ? -1 : 1;
          } else if (aValue > bValue) {
            return this.sortOrder === "asc" ? 1 : -1;
          } else {
            return 0;
          }
        });
      } else {
        return this.filteredRows;
      }
    },
    // 현재 페이지에 표시될 항목 계산
    paginatedRows() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedRows.slice(start, end);
    },
    // 전체 페이지 수 계산
    totalPages() {
      return Math.ceil(this.sortedRows.length / this.itemsPerPage);
    },
  },
  watch: {
    // tableRows가 변경될 때마다 페이지를 첫 페이지로 리셋합니다.
    tableRows() {
      this.currentPage = 1;
    },
  },
  methods: {
    // 페이지 변경 메서드
    changePage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    // 테이블 정렬 메서드
    sortTable(index) {
      if (this.sortKey === index) {
        // 이미 해당 열로 정렬 중이면 순서를 바꿈
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        // 새로운 열을 기준으로 정렬 시작
        this.sortKey = index;
        this.sortOrder = "asc";
      }
      this.currentPage = 1; // 정렬 시 첫 페이지로 이동
    },
  },
  mounted() {
    // 초기 데이터가 있을 때 페이지를 올바르게 설정하기 위해 첫 페이지로 설정
    this.changePage(1);
  },
};
</script>

<style scoped>
.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

th {
  user-select: none;
}
</style>
