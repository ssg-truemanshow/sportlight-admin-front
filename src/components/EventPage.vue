<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <h1 class="card-title">이벤트 목록</h1>
                  <h4 class="card-subtitle">
                    지금까지 만들어진 모든 이벤트와 쿠폰에 대해 관리하실 수 있습니다.
                  </h4>
                </div>
                <button type="button" class="btn btn-primary" @click="openModal">등록</button>
              </div>
              <div class="table-responsive">
                <table
                  id="zero_config"
                  class="table table-striped table-bordered no-wrap"
                >
                  <thead>
                    <tr>
                      <th
                        v-for="(tableHeader, index) in tableHeaders"
                        :key="index"
                      >
                        {{ tableHeader }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tableRow, index) in tableRows" :key="index">
                      <td v-for="(cell, i) in tableRow.slice(0, 5)" :key="i">
                        {{ cell }}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning"
                          style="margin: 0 auto; display: block"
                          @click="openDetailModal(index)"
                        >
                          <i class="far fa-envelope-open"></i> 자세히 보기
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Registration Modal -->
    <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eventModalLabel">이벤트 등록</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="registerEvent">
              <div class="form-group">
                <label for="eventName">이벤트 명</label>
                <input type="text" class="form-control" id="eventName" v-model="newEvent.eventName" required>
              </div>
              <div class="form-group">
                <label for="eventContent">이벤트 내용</label>
                <textarea class="form-control" id="eventContent" v-model="newEvent.eventContent" required></textarea>
              </div>
              <div class="form-group">
                <label for="eventImage">이미지 선택</label>
                <input type="file" class="form-control-file" id="eventImage" @change="onFileChange">
              </div>
              <div class="form-group">
                <label for="classLink">클래스 링크</label>
                <input type="url" class="form-control" id="classLink" v-model="newEvent.classLink">
              </div>
              <div class="form-group">
                <label for="couponCount">쿠폰 갯수</label>
                <input type="number" class="form-control" id="couponCount" v-model="newEvent.couponCount" required>
              </div>
              <div class="form-group">
                <label for="startDate">시작 날짜</label>
                <input type="date" class="form-control" id="startDate" v-model="newEvent.startDate" required>
              </div>
              <div class="form-group">
                <label for="endDate">종료 날짜</label>
                <input type="date" class="form-control" id="endDate" v-model="newEvent.endDate" required>
              </div>
              <div class="form-group">
                <label for="couponName">쿠폰명</label>
                <input type="text" class="form-control" id="couponName" v-model="newEvent.couponName" required>
              </div>
              <div class="form-group">
                <label for="discountAmount">할인율</label>
                <input type="text" class="form-control" id="discountAmount" v-model="newEvent.discountAmount" required>
              </div>
              <button type="submit" class="btn btn-primary">등록하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModalLabel">이벤트 상세 정보</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeDetailModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateEvent">
              <div class="form-group">
                <label for="detailEventName">이벤트 명</label>
                <input type="text" class="form-control" id="detailEventName" v-model="selectedEvent['이벤트명']" required>
              </div>
              <div class="form-group">
                <label for="detailEventImage">이미지 선택</label>
                <input type="file" class="form-control-file" id="detailEventImage" @change="onDetailFileChange">
              </div>
              <div class="form-group">
                <label for="detailClassLink">클래스 링크</label>
                <input type="url" class="form-control" id="detailClassLink" v-model="selectedEvent['클래스 링크']">
              </div>
              <div class="form-group">
                <label for="detailCouponCount">쿠폰 갯수</label>
                <input type="number" class="form-control" id="detailCouponCount" v-model="selectedEvent['쿠폰 갯수']" required>
              </div>
              <div class="form-group">
                <label for="detailCreationDate">생성 일시</label>
                <input type="text" class="form-control" id="detailCreationDate" v-model="selectedEvent['생성 일시']" readonly>
              </div>
              <div class="form-group">
                <label for="detailStartDate">시작 날짜</label>
                <input type="text" class="form-control" id="detailStartDate" v-model="selectedEvent['시작 날짜']" readonly>
              </div>
              <div class="form-group">
                <label for="detailEndDate">종료 날짜</label>
                <input type="text" class="form-control" id="detailEndDate" v-model="selectedEvent['종료 날짜']" readonly>
              </div>
              <div class="form-group">
                <label for="detailCouponName">쿠폰명</label>
                <input type="text" class="form-control" id="detailCouponName" v-model="selectedEvent['쿠폰명']" readonly>
              </div>
              <div class="form-group">
                <label for="detailDiscountAmount">할인율</label>
                <input type="text" class="form-control" id="detailDiscountAmount" v-model="selectedEvent['할인율']" readonly>
              </div>
              <button type="submit" class="btn btn-success">수정하기</button>
              <button type="button" class="btn btn-danger" @click="deleteEvent">삭제하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: {
        columns: [
          "이벤트 아이디",
          "이벤트명",
          "진행 상태",
          "이벤트 내용",
          "쿠폰 갯수",
          "상세 정보",
        ],
        data: [
          {
            "이벤트 아이디": 1,
            "이벤트명": "신규 가입 이벤트",
            "진행 상태": "진행 중",
            "상세 정보": "신규 회원에게 특별 혜택 제공",
            "이벤트 내용": "가입 시 쿠폰 지급",
            "이미지 파일": "event1.jpg",
            "클래스 링크": "http://example.com/event1",
            "쿠폰 갯수": 100,
            "시작 날짜": "2024-01-01",
            "종료 날짜": "2024-12-31",
            "생성 일시": "2024-01-01 09:00",
            "쿠폰명": "신규 가입 쿠폰",
            "할인율": "5000원",
          },
          {
            "이벤트 아이디": 2,
            "이벤트명": "여름 특가 이벤트",
            "진행 상태": "종료",
            "상세 정보": "여름 한정 할인 행사",
            "이벤트 내용": "여름 상품 할인 제공",
            "이미지 파일": "event2.jpg",
            "클래스 링크": "http://example.com/event2",
            "쿠폰 갯수": 50,
            "시작 날짜": "2024-06-01",
            "종료 날짜": "2024-08-31",
            "생성 일시": "2024-05-20 10:00",
            "쿠폰명": "여름 할인 쿠폰",
            "할인율": "10000원",
          },
          {
            "이벤트 아이디": 3,
            "이벤트명": "친구 추천 이벤트",
            "진행 상태": "진행 중",
            "상세 정보": "친구 초대 시 양쪽 모두 쿠폰 지급",
            "이벤트 내용": "추천 시 추가 할인",
            "이미지 파일": "event3.jpg",
            "클래스 링크": "http://example.com/event3",
            "쿠폰 갯수": 200,
            "시작 날짜": "2024-03-01",
            "종료 날짜": "2024-12-31",
            "생성 일시": "2024-02-25 14:30",
            "쿠폰명": "추천 보너스 쿠폰",
            "할인율": "7000원",
          },
          {
            "이벤트 아이디": 4,
            "이벤트명": "블랙 프라이데이 세일",
            "진행 상태": "종료",
            "상세 정보": "블랙 프라이데이 한정 할인 행사",
            "이벤트 내용": "모든 제품 20% 할인",
            "이미지 파일": "event4.jpg",
            "클래스 링크": "http://example.com/event4",
            "쿠폰 갯수": 500,
            "시작 날짜": "2024-11-23",
            "종료 날짜": "2024-11-24",
            "생성 일시": "2024-10-30 16:00",
            "쿠폰명": "블랙 프라이데이 쿠폰",
            "할인율": "20%",
          },
          {
            "이벤트 아이디": 5,
            "이벤트명": "크리스마스 특별 이벤트",
            "진행 상태": "예정",
            "상세 정보": "크리스마스 선물 증정",
            "이벤트 내용": "모든 구매 시 무료 선물",
            "이미지 파일": "event5.jpg",
            "클래스 링크": "http://example.com/event5",
            "쿠폰 갯수": 300,
            "시작 날짜": "2024-12-20",
            "종료 날짜": "2024-12-25",
            "생성 일시": "2024-11-15 11:00",
            "쿠폰명": "크리스마스 선물 쿠폰",
            "할인율": "선물 증정",
          },
          {
            "이벤트 아이디": 6,
            "이벤트명": "가을 맞이 할인 이벤트",
            "진행 상태": "종료",
            "상세 정보": "가을 상품 할인 행사",
            "이벤트 내용": "가을 의류 최대 30% 할인",
            "이미지 파일": "event6.jpg",
            "클래스 링크": "http://example.com/event6",
            "쿠폰 갯수": 80,
            "시작 날짜": "2024-09-01",
            "종료 날짜": "2024-09-30",
            "생성 일시": "2024-08-10 09:00",
            "쿠폰명": "가을 할인 쿠폰",
            "할인율": "30%",
          },
          {
            "이벤트 아이디": 7,
            "이벤트명": "멤버십 감사 이벤트",
            "진행 상태": "진행 중",
            "상세 정보": "멤버십 회원 한정 특별 할인",
            "이벤트 내용": "회원 전용 추가 할인",
            "이미지 파일": "event7.jpg",
            "클래스 링크": "http://example.com/event7",
            "쿠폰 갯수": 150,
            "시작 날짜": "2024-05-01",
            "종료 날짜": "2024-12-31",
            "생성 일시": "2024-04-25 14:00",
            "쿠폰명": "멤버십 할인 쿠폰",
            "할인율": "15000원",
          },
          {
            "이벤트 아이디": 8,
            "이벤트명": "봄맞이 대청소 이벤트",
            "진행 상태": "종료",
            "상세 정보": "봄맞이 청소용품 할인",
            "이벤트 내용": "청소용품 최대 50% 할인",
            "이미지 파일": "event8.jpg",
            "클래스 링크": "http://example.com/event8",
            "쿠폰 갯수": 60,
            "시작 날짜": "2024-03-01",
            "종료 날짜": "2024-04-30",
            "생성 일시": "2024-02-20 13:00",
            "쿠폰명": "봄맞이 할인 쿠폰",
            "할인율": "50%",
          },
          {
            "이벤트 아이디": 9,
            "이벤트명": "추석 선물세트 이벤트",
            "진행 상태": "종료",
            "상세 정보": "추석 맞이 선물세트 할인 행사",
            "이벤트 내용": "추석 선물세트 최대 15% 할인",
            "이미지 파일": "event9.jpg",
            "클래스 링크": "http://example.com/event9",
            "쿠폰 갯수": 100,
            "시작 날짜": "2024-09-10",
            "종료 날짜": "2024-09-20",
            "생성 일시": "2024-08-25 10:30",
            "쿠폰명": "추석 선물세트 할인 쿠폰",
            "할인율": "15%",
          },
          {
            "이벤트 아이디": 10,
            "이벤트명": "연말 감사 이벤트",
            "진행 상태": "예정",
            "상세 정보": "연말 맞이 감사 행사",
            "이벤트 내용": "모든 고객 감사 쿠폰 제공",
            "이미지 파일": "event10.jpg",
            "클래스 링크": "http://example.com/event10",
            "쿠폰 갯수": 500,
            "시작 날짜": "2024-12-01",
            "종료 날짜": "2024-12-31",
            "생성 일시": "2024-11-10 15:00",
            "쿠폰명": "연말 감사 쿠폰",
            "할인율": "10000원",
          },
        ],
      },
      tableHeaders: [],
      tableRows: [],
      newEvent: {
        eventName: '',
        eventContent: '',
        eventImage: null,
        classLink: '',
        couponCount: '',
        startDate: '',
        endDate: '',
        couponName: '',
        discountAmount: '',
      },
      selectedEvent: {},
    };
  },
  methods: {
    openModal() {
      $('#eventModal').modal('show');
    },
    closeModal() {
      $('#eventModal').modal('hide');
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.newEvent.eventImage = file;
    },
    registerEvent() {
      // Logic to handle new event registration
      console.log('New Event:', this.newEvent);
      $('#eventModal').modal('hide');
    },
    openDetailModal(index) {
      this.selectedEvent = { ...this.jsonData.data[index] };
      $('#detailModal').modal('show');
    },
    closeDetailModal() {
      $('#detailModal').modal('hide');
    },
    onDetailFileChange(e) {
      const file = e.target.files[0];
      this.selectedEvent.eventImage = file;
    },
    updateEvent() {
      // Logic to handle event update
      console.log('Updated Event:', this.selectedEvent);
      $('#detailModal').modal('hide');
    },
    deleteEvent() {
      // Logic to handle event deletion
      console.log('Deleted Event:', this.selectedEvent);
      $('#detailModal').modal('hide');
    },
  },
  created() {
    // JSON 데이터를 props 형식으로 변환
    this.tableHeaders = this.jsonData.columns;
    this.tableRows = this.jsonData.data.map((row) => Object.values(row));
  },
};
</script>

<style scoped></style>
