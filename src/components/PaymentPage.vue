<template>
  <ListPage
    :tableRows="tableRows"
    :tableHeaders="tableHeaders"
    :descOfPage="descOfPage"
  />
</template>

<script>
import ListPage from "./ListPage.vue";
import { useAPI } from "@/axios/useAPI"
export default {
  components: {
    ListPage,
  },
  data() {
    return {
      descOfPage: [
        "결제 내역",
        "사용자들의 확정된 결제 내역을 확인하실 수 있습니다.",
      ],
      tableHeaders: [
        "결제 내역 아이디",
        "총 결제금액",
        "결제 수수료",
        "제공자 아이디",
        "수혜자 아이디",
        "결제 날짜",
      ],
      tableRows: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/payments");

        this.tableRows = response.data.data.map((payment) => [
          payment.attendCourseId,
          this.formatCurrency(payment.totalAmount),
          this.formatCurrency(payment.paymentFee),
          payment.userId,
          payment.courseOwnerId,
          this.formatDate(payment.regDate),
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
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

<style></style>
