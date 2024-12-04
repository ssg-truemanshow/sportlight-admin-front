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
        "배너 목록",
        "홈페이지에 보여줄 수 있는 배너들에 대해 확인하실 수 있습니다.",
      ],
      tableHeaders: [
        "배너명",
        "주 텍스트",
        "서브 텍스트",
        "링크",
        "생성일시",
        "활성화 상태",
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
          banner_name: "축구 클래스",
          banner_main: "초급 축구 레슨",
          banner_sub: "축구의 기본 기술을 배워보세요",
          banner_link: "https://example.com/soccer-class",
          banner_date: "2024-07-10",
          isActive: true,
        },
        {
          banner_name: "요가 워크샵",
          banner_main: "요가 입문 강의",
          banner_sub: "요가로 몸과 마음을 가볍게",
          banner_link: "https://example.com/yoga-workshop",
          banner_date: "2024-08-15",
          isActive: true,
        },
        {
          banner_name: "배드민턴 클리닉",
          banner_main: "배드민턴 기초 배우기",
          banner_sub: "스매시와 드롭샷의 기본을 익히세요",
          banner_link: "https://example.com/badminton-clinic",
          banner_date: "2024-09-01",
          isActive: false,
        },
        {
          banner_name: "테니스 레슨",
          banner_main: "테니스 초급 레슨",
          banner_sub: "포핸드와 백핸드의 기본을 배워보세요",
          banner_link: "https://example.com/tennis-lessons",
          banner_date: "2024-06-20",
          isActive: true,
        },
        {
          banner_name: "수영 강습",
          banner_main: "자유형과 배영 배우기",
          banner_sub: "물에 대한 두려움을 없애고 자유롭게 수영하세요",
          banner_link: "https://example.com/swimming-class",
          banner_date: "2024-10-05",
          isActive: false,
        },
        {
          banner_name: "농구 교실",
          banner_main: "농구 기초 배우기",
          banner_sub: "기본 드리블과 슛 기술을 배워보세요",
          banner_link: "https://example.com/basketball-class",
          banner_date: "2024-11-12",
          isActive: true,
        },
        {
          banner_name: "탁구 레슨",
          banner_main: "탁구 기본 기술 익히기",
          banner_sub: "서브와 랠리 연습을 통해 실력을 키워보세요",
          banner_link: "https://example.com/table-tennis-lessons",
          banner_date: "2024-09-18",
          isActive: true,
        },
        {
          banner_name: "자전거 라이딩",
          banner_main: "초보 자전거 라이딩",
          banner_sub: "안전하게 자전거 타는 법을 배우세요",
          banner_link: "https://example.com/bike-riding",
          banner_date: "2024-12-01",
          isActive: false,
        },
        {
          banner_name: "골프 클래스",
          banner_main: "골프 스윙 기초",
          banner_sub: "정확한 스윙과 퍼팅 기술을 배워보세요",
          banner_link: "https://example.com/golf-class",
          banner_date: "2024-08-25",
          isActive: true,
        },
        {
          banner_name: "등산 모임",
          banner_main: "초보 등산 모임",
          banner_sub: "기초적인 등산 요령과 안전 교육",
          banner_link: "https://example.com/hiking-meetup",
          banner_date: "2024-07-30",
          isActive: true,
        },
      ];

      // JSON 데이터를 rows 형식으로 변환
      this.tableRows = mockData.map((row) => Object.values(row));
    },
  },
};
</script>

<style></style>
