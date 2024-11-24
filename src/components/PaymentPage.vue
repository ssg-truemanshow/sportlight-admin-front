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
        descOfPage: [
          "결제 내역",
          "사용자들의 확정된 결제 내역을 확인하실 수 있습니다.",
        ],
        tableHeaders: [
          "결제 내역 아이디",
          "총 결제금액",
          "결제 수수료",
          "제공자",
          "수혜자",
          "결제 날짜",
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
            category: "Cooking",
            title: "Intro to Cooking",
            tuition: 25000,
            max_capacity: 5,
            level: "Beginner",
            approved_date: "2024-08-05",
          },
          {
            category: "Music",
            title: "Hands-On Music",
            tuition: 5000,
            max_capacity: 5,
            level: "Intermediate",
            approved_date: "2024-04-28",
          },
          {
            category: "Music",
            title: "Advanced Training Music",
            tuition: 12000,
            max_capacity: 15,
            level: "Advanced",
            approved_date: "2024-02-21",
          },
          {
            category: "Cooking",
            title: "Intro to Cooking",
            tuition: 10000,
            max_capacity: 15,
            level: "Intermediate",
            approved_date: "2024-02-28",
          },
          {
            category: "Art",
            title: "Intro to Art",
            tuition: 12000,
            max_capacity: 5,
            level: "Advanced",
            approved_date: "2024-08-05",
          },
          {
            category: "Sports",
            title: "Intro to Sports",
            tuition: 25000,
            max_capacity: 15,
            level: "Beginner",
            approved_date: "2023-12-23",
          },
          {
            category: "Cooking",
            title: "Beginner Workshop Cooking",
            tuition: 20000,
            max_capacity: 15,
            level: "Advanced",
            approved_date: "2024-09-03",
          },
          {
            category: "Art",
            title: "Beginner Workshop Art",
            tuition: 30000,
            max_capacity: 20,
            level: "Beginner",
            approved_date: "2024-10-08",
          },
          {
            category: "Music",
            title: "Advanced Training Music",
            tuition: 30000,
            max_capacity: 5,
            level: "Advanced",
            approved_date: "2024-09-14",
          },
          {
            category: "Sports",
            title: "Masterclass Sports",
            tuition: 30000,
            max_capacity: 10,
            level: "Beginner",
            approved_date: "2024-04-10",
          },
          {
            category: "Cooking",
            title: "Beginner Workshop Cooking",
            tuition: 12000,
            max_capacity: 20,
            level: "Advanced",
            approved_date: "2024-03-31",
          },
          {
            category: "Technology",
            title: "Beginner Workshop Technology",
            tuition: 15000,
            max_capacity: 5,
            level: "Intermediate",
            approved_date: "2024-01-12",
          },
          {
            category: "Technology",
            title: "Advanced Training Technology",
            tuition: 10000,
            max_capacity: 10,
            level: "Intermediate",
            approved_date: "2024-07-30",
          },
          {
            category: "Sports",
            title: "Intro to Sports",
            tuition: 15000,
            max_capacity: 10,
            level: "Beginner",
            approved_date: "2024-09-18",
          },
          {
            category: "Art",
            title: "Beginner Workshop Art",
            tuition: 10000,
            max_capacity: 20,
            level: "Advanced",
            approved_date: "2023-12-14",
          },
          {
            category: "Art",
            title: "Masterclass Art",
            tuition: 20000,
            max_capacity: 20,
            level: "Beginner",
            approved_date: "2024-03-29",
          },
          {
            category: "Art",
            title: "Beginner Workshop Art",
            tuition: 25000,
            max_capacity: 20,
            level: "Advanced",
            approved_date: "2024-06-06",
          },
          {
            category: "Music",
            title: "Hands-On Music",
            tuition: 12000,
            max_capacity: 25,
            level: "Advanced",
            approved_date: "2024-03-22",
          },
          {
            category: "Technology",
            title: "Intro to Technology",
            tuition: 25000,
            max_capacity: 25,
            level: "Beginner",
            approved_date: "2024-05-06",
          },
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
          {
            category: "Music",
            title: "Advanced Training Music",
            tuition: 20000,
            max_capacity: 10,
            level: "Advanced",
            approved_date: "2024-07-10",
          },
          {
            category: "Technology",
            title: "Hands-On Technology",
            tuition: 20000,
            max_capacity: 25,
            level: "Advanced",
            approved_date: "2024-10-24",
          },
          {
            category: "Music",
            title: "Masterclass Music",
            tuition: 30000,
            max_capacity: 20,
            level: "Beginner",
            approved_date: "2024-08-20",
          },
        ];
  
        // JSON 데이터를 rows 형식으로 변환
        this.tableRows = mockData.map((row) => Object.values(row));
      },
    },
  };
  </script>
  
  <style></style>
  