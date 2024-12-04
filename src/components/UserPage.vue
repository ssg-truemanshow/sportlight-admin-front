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
        "회원 목록",
        "모든 회원에 대한 정보를 확인하실 수 있습니다.",
      ],
      tableHeaders: [
        "회원 아이디",
        "로그인 아이디",
        "이름",
        "성별",
        "권한",
        "가입날짜",
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
        const response = await get("/admin/users");

        this.tableRows = response.data.data.map((user) => [
          user.id,
          user.loginId,
          user.userName,
          user.userGender,
          user.role,
          this.formatDate(user.regDate),
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
  },
};
</script>

<style></style>
