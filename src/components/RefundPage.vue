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
          refund.refundAmount,
          refund.refundRate,
          refund.userId,
          refund.courseOwnerId,
          refund.requestDate,
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
  },
};
</script>

<style></style>
