<template>
  <ListPage
    :tableRows="tableRows"
    :tableHeaders="tableHeaders"
    :descOfPage="descOfPage"
  />
</template>

<script>
import ListPage from "./ListPage.vue";
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
        "제공자",
        "요청자",
        "환불 날짜",
      ],
      tableRows: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 서버 대신 임시 데이터를 사용
      const mockData = [
        {
          category: "Art",
          title: "Masterclass Art",
          tuition: 20000,
          max_capacity: 5,
          level: "Advanced",
          approved_date: "2024-09-18",
        },
        {
          category: "Sports",
          title: "Intro to Sports",
          tuition: 5000,
          max_capacity: 10,
          level: "Advanced",
          approved_date: "2024-07-30",
        },
        {
          category: "Cooking",
          title: "Hands-On Cooking",
          tuition: 15000,
          max_capacity: 15,
          level: "Advanced",
          approved_date: "2023-11-17",
        },
        {
          category: "Art",
          title: "Hands-On Art",
          tuition: 20000,
          max_capacity: 15,
          level: "Intermediate",
          approved_date: "2024-09-21",
        },
        {
          category: "Technology",
          title: "Intro to Technology",
          tuition: 15000,
          max_capacity: 20,
          level: "Intermediate",
          approved_date: "2024-08-18",
        },
        {
          category: "Technology",
          title: "Masterclass Technology",
          tuition: 12000,
          max_capacity: 25,
          level: "Beginner",
          approved_date: "2024-01-21",
        },
        {
          category: "Music",
          title: "Hands-On Music",
          tuition: 15000,
          max_capacity: 5,
          level: "Advanced",
          approved_date: "2024-07-13",
        },
        {
          category: "Sports",
          title: "Hands-On Sports",
          tuition: 15000,
          max_capacity: 5,
          level: "Intermediate",
          approved_date: "2024-10-26",
        },
      ];

      // JSON 데이터를 rows 형식으로 변환
      this.tableRows = mockData.map((row) => Object.values(row));
    },
  },
};
</script>

<style></style>
