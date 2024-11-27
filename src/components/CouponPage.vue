<template>
  <div>
  <ListPage
    :tableRows="tableRows"
    :tableHeaders="tableHeaders"
    :descOfPage="descOfPage"
  />
  </div>
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
      descOfPage: [
        "쿠폰 목록",
        "현재 발행되어 있는 쿠폰들을 확인하실 수 있습니다.",
      ],
      tableHeaders: [
        "쿠폰명",
        "이벤트명",
        "할인율",
        "발행 갯수",
        "생성날짜",
        "종료날짜",
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
        const response = await get("/admin/coupons");

        this.tableRows = response.data.data.map((coupon) => [
          coupon.couponName,
          coupon.eventName,
          coupon.discountRate,
          coupon.couponNum,
          coupon.startDate,
          coupon.endDate,
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
  },
};
</script>

<style></style>
