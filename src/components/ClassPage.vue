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
      descOfPage: [
        "클래스 목록",
        "모든 클래스에 대한 정보를 확인하실 수 있습니다.",
      ],
      tableHeaders: [
        "카테고리",
        "제목",
        "가격",
        "최대인원",
        "난이도",
        "생성날짜",
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
        const response = await get("/admin/courses");

        this.tableRows = response.data.data.map((course) => [
          course.categoryName,
          course.courseTitle,
          course.courseTuition,
          course.maxCapacity,
          course.courseLevel,
          course.regDate,
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
  },
};
</script>

<style></style>
