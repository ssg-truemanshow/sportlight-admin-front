<template>
  <ListPage
    :tableRows="tableRows"
    :tableHeaders="tableHeaders"
    :descOfPage="descOfPage"
  />
</template>

<script>
import ListPage from "./ListPage.vue";
import { useAPI } from "@/axios/useAPI";

export default {
  components: {
    ListPage,
  },
  data() {
    return {
      descOfPage: ["환불 내역", "사용자들의 환불 내역을 확인하실 수 있습니다."],
      tableHeaders: [
        "환불 내역 아이디",
        "환불 금액",
        "환불 수수료",
        "제공자 아이디",
        "요청자 아이디",
        "환불 날짜",
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
        const response = await get("/admin/refunds");

        this.tableRows = response.data.data.map((refund) => [
          refund.refundLogId,
          this.formatCurrency(refund.refundAmount),
          this.formatCurrency(refund.refundRate),
          refund.userId,
          refund.courseOwnerId,
          this.formatDate(refund.requestDate),
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
