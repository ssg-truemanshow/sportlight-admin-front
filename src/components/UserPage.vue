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
    fetchData() {
      // 서버 대신 임시 데이터를 사용
      const mockData = [
        {
          nickname: "TigerN",
          loginId: "tiger",
          name: "Tiger Nixon",
          gender: "남",
          role: "관리자",
          joinDate: "2011/04/25",
        },
        {
          nickname: "GarrettW",
          loginId: "garrett",
          name: "Garrett Winters",
          gender: "남",
          role: "회원",
          joinDate: "2011/07/25",
        },
        {
          nickname: "AshtonC",
          loginId: "ashton",
          name: "Ashton Cox",
          gender: "남",
          role: "회원",
          joinDate: "2009/01/12",
        },
        {
          nickname: "CedricK",
          loginId: "cedric",
          name: "Cedric Kelly",
          gender: "남",
          role: "개발자",
          joinDate: "2012/03/29",
        },
        {
          nickname: "AiriS",
          loginId: "airi",
          name: "Airi Satou",
          gender: "여",
          role: "회계사",
          joinDate: "2008/11/28",
        },
        {
          nickname: "BrielleW",
          loginId: "brielle",
          name: "Brielle Williamson",
          gender: "여",
          role: "통합 전문가",
          joinDate: "2012/12/02",
        },
        {
          nickname: "HerrodC",
          loginId: "herrod",
          name: "Herrod Chandler",
          gender: "남",
          role: "영업 보조",
          joinDate: "2012/08/06",
        },
        {
          nickname: "RhonaD",
          loginId: "rhona",
          name: "Rhona Davidson",
          gender: "여",
          role: "통합 전문가",
          joinDate: "2010/10/14",
        },
        {
          nickname: "ColleenH",
          loginId: "colleen",
          name: "Colleen Hurst",
          gender: "여",
          role: "자바스크립트 개발자",
          joinDate: "2009/09/15",
        },
        {
          nickname: "SonyaF",
          loginId: "sonya",
          name: "Sonya Frost",
          gender: "여",
          role: "소프트웨어 엔지니어",
          joinDate: "2008/12/13",
        },
        {
          nickname: "JenaG",
          loginId: "jena",
          name: "Jena Gaines",
          gender: "여",
          role: "사무 관리자",
          joinDate: "2008/12/19",
        },
        {
          nickname: "QuinnF",
          loginId: "quinn",
          name: "Quinn Flynn",
          gender: "남",
          role: "지원 리드",
          joinDate: "2013/03/03",
        },
        {
          nickname: "ChardeM",
          loginId: "charde",
          name: "Charde Marshall",
          gender: "여",
          role: "지역 이사",
          joinDate: "2008/10/16",
        },
        {
          nickname: "HaleyK",
          loginId: "haley",
          name: "Haley Kennedy",
          gender: "여",
          role: "선임 마케팅 디자이너",
          joinDate: "2012/12/18",
        },
        {
          nickname: "TatyanaF",
          loginId: "tatyana",
          name: "Tatyana Fitzpatrick",
          gender: "여",
          role: "지역 이사",
          joinDate: "2010/03/17",
        },
        {
          nickname: "MichaelS",
          loginId: "michael",
          name: "Michael Silva",
          gender: "남",
          role: "마케팅 디자이너",
          joinDate: "2012/11/27",
        },
        {
          nickname: "PaulB",
          loginId: "paul",
          name: "Paul Byrd",
          gender: "남",
          role: "CFO",
          joinDate: "2010/06/09",
        },
        {
          nickname: "GloriaL",
          loginId: "gloria",
          name: "Gloria Little",
          gender: "여",
          role: "시스템 관리자",
          joinDate: "2009/04/10",
        },
        {
          nickname: "TimothyM",
          loginId: "timothy",
          name: "Timothy Mooney",
          gender: "남",
          role: "사무 관리자",
          joinDate: "2008/12/11",
        },
        {
          nickname: "JacksonB",
          loginId: "jackson",
          name: "Jackson Bradshaw",
          gender: "남",
          role: "이사",
          joinDate: "2008/09/26",
        },
        {
          nickname: "OliviaL",
          loginId: "olivia",
          name: "Olivia Liang",
          gender: "여",
          role: "지원 엔지니어",
          joinDate: "2011/02/03",
        },
        {
          nickname: "BrunoN",
          loginId: "bruno",
          name: "Bruno Nash",
          gender: "남",
          role: "소프트웨어 엔지니어",
          joinDate: "2011/05/03",
        },
        {
          nickname: "SakuraY",
          loginId: "sakura",
          name: "Sakura Yamamoto",
          gender: "여",
          role: "지원 엔지니어",
          joinDate: "2009/08/19",
        },
        {
          nickname: "ThorW",
          loginId: "thor",
          name: "Thor Walton",
          gender: "남",
          role: "개발자",
          joinDate: "2013/08/11",
        },
        {
          nickname: "FinnC",
          loginId: "finn",
          name: "Finn Camacho",
          gender: "남",
          role: "지원 엔지니어",
          joinDate: "2009/07/07",
        },
        {
          nickname: "SergeB",
          loginId: "serge",
          name: "Serge Baldwin",
          gender: "남",
          role: "데이터 코디네이터",
          joinDate: "2012/04/09",
        },
        {
          nickname: "ZenaidaF",
          loginId: "zenaida",
          name: "Zenaida Frank",
          gender: "여",
          role: "소프트웨어 엔지니어",
          joinDate: "2010/01/04",
        },
        {
          nickname: "ZoritaS",
          loginId: "zorita",
          name: "Zorita Serrano",
          gender: "여",
          role: "소프트웨어 엔지니어",
          joinDate: "2012/06/01",
        },
        {
          nickname: "JenniferA",
          loginId: "jennifer",
          name: "Jennifer Acosta",
          gender: "여",
          role: "주니어 자바스크립트 개발자",
          joinDate: "2013/02/01",
        },
        {
          nickname: "CaraS",
          loginId: "cara",
          name: "Cara Stevens",
          gender: "여",
          role: "영업 보조",
          joinDate: "2011/12/06",
        },
        {
          nickname: "HermioneB",
          loginId: "hermione",
          name: "Hermione Butler",
          gender: "여",
          role: "지역 이사",
          joinDate: "2011/03/21",
        },
        {
          nickname: "LaelG",
          loginId: "lael",
          name: "Lael Greer",
          gender: "남",
          role: "시스템 관리자",
          joinDate: "2009/02/27",
        },
        {
          nickname: "JonasA",
          loginId: "jonas",
          name: "Jonas Alexander",
          gender: "남",
          role: "개발자",
          joinDate: "2010/07/14",
        },
        {
          nickname: "ShadD",
          loginId: "shad",
          name: "Shad Decker",
          gender: "남",
          role: "지역 이사",
          joinDate: "2008/11/13",
        },
        {
          nickname: "MichaelB",
          loginId: "michaelb",
          name: "Michael Bruce",
          gender: "남",
          role: "자바스크립트 개발자",
          joinDate: "2011/06/27",
        },
        {
          nickname: "DonnaS",
          loginId: "donna",
          name: "Donna Snider",
          gender: "여",
          role: "고객 지원",
          joinDate: "2011/01/25",
        },
      ];

      // JSON 데이터를 rows 형식으로 변환
      this.tableRows = mockData.map((row) => Object.values(row));
    },
  },
};
</script>

<style></style>
