<template>
  <div class="page-wrapper" style="margin-left: -20px; margin-top: -150px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div>
                  <h1 class="card-title">이벤트 목록</h1>
                  <h4 class="card-subtitle">
                    지금까지 만들어진 모든 이벤트와 쿠폰에 대해 관리하실 수
                    있습니다.
                  </h4>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="openModal"
                >
                  등록
                </button>
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
                          @click="viewEventDetails(index)"
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
    <div
      class="modal fade"
      id="eventModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eventModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eventModalLabel">이벤트 등록</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="registerEvent">
              <div class="form-group">
                <label for="eventName">이벤트 명</label>
                <input
                  type="text"
                  class="form-control"
                  id="eventName"
                  v-model="newEvent.eventName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="eventContent">이벤트 내용</label>
                <textarea
                  class="form-control"
                  id="eventContent"
                  v-model="newEvent.eventContent"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label for="eventImage">이미지 선택</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="eventImage"
                  @change="onFileChange"
                />
              </div>
              <div class="form-group">
                <label for="classLink">클래스 링크</label>
                <input
                  type="url"
                  class="form-control"
                  id="classLink"
                  v-model="newEvent.classLink"
                />
              </div>
              <div class="form-group">
                <label for="couponCount">쿠폰 갯수</label>
                <input
                  type="number"
                  class="form-control"
                  id="couponCount"
                  v-model="newEvent.couponCount"
                  required
                />
              </div>
              <div class="form-group">
                <label for="startDate">시작 날짜</label>
                <input
                  type="date"
                  class="form-control"
                  id="startDate"
                  v-model="newEvent.startDate"
                  required
                />
              </div>
              <div class="form-group">
                <label for="endDate">종료 날짜</label>
                <input
                  type="date"
                  class="form-control"
                  id="endDate"
                  v-model="newEvent.endDate"
                  required
                />
              </div>
              <div class="form-group">
                <label for="couponName">쿠폰명</label>
                <input
                  type="text"
                  class="form-control"
                  id="couponName"
                  v-model="newEvent.couponName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="discountAmount">할인율</label>
                <input
                  type="text"
                  class="form-control"
                  id="discountAmount"
                  v-model="newEvent.discountAmount"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">등록하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <div
      class="modal fade"
      id="detailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="detailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModalLabel">이벤트 상세 정보</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeDetailModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="detailEventName">이벤트 명</label>
              <input
                type="text"
                class="form-control"
                id="detailEventName"
                v-model="selectedEvent['이벤트명']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailEventContent">이벤트 내용</label>
              <textarea
                class="form-control"
                id="detailEventContent"
                v-model="selectedEvent['이벤트 내용']"
                readonly
              ></textarea>
            </div>
            <div class="form-group">
              <label for="detailClassLink">클래스 링크</label>
              <input
                type="url"
                class="form-control"
                id="detailClassLink"
                v-model="selectedEvent['클래스 링크']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailCouponCount">쿠폰 갯수</label>
              <input
                type="number"
                class="form-control"
                id="detailCouponCount"
                v-model="selectedEvent['쿠폰 갯수']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailStartDate">시작 날짜</label>
              <input
                type="text"
                class="form-control"
                id="detailStartDate"
                v-model="selectedEvent['시작 날짜']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailEndDate">종료 날짜</label>
              <input
                type="text"
                class="form-control"
                id="detailEndDate"
                v-model="selectedEvent['종료 날짜']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailCouponName">쿠폰명</label>
              <input
                type="text"
                class="form-control"
                id="detailCouponName"
                v-model="selectedEvent['쿠폰명']"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="detailDiscountAmount">할인율</label>
              <input
                type="text"
                class="form-control"
                id="detailDiscountAmount"
                v-model="selectedEvent['할인율']"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAPI } from "@/axios/useAPI";

export default {
  data() {
    return {
      tableHeaders: [],
      tableRows: [],
      newEvent: {
        eventName: "",
        eventContent: "",
        eventImage: null,
        classLink: "",
        couponCount: "",
        startDate: "",
        endDate: "",
        couponName: "",
        discountAmount: "",
      },
      selectedEvent: {},
    };
  },
  methods: {
    async fetchData() {
      const { get } = useAPI();
      try {
        const response = await get("/admin/events");
        this.tableHeaders = [
          "이벤트 아이디",
          "이벤트명",
          "진행 상태",
          "이벤트 내용",
          "쿠폰 갯수",
          "상세 정보",
        ];
        this.tableRows = response.data.data.map((event) => [
          event.id,
          event.name,
          event.status,
          event.content,
          this.formatNumber(event.num),
          event.classLink,
          this.formatDate(event.startDate),
          this.formatDate(event.endDate),
          event.couponName,
          this.formatPercentage(event.discountRate),
        ]);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    },
    viewEventDetails(index) {
      const selectedEventData = this.tableRows[index];
      this.selectedEvent = {
        이벤트명: selectedEventData[1],
        "이벤트 내용": selectedEventData[3],
        "클래스 링크": selectedEventData[5],
        "쿠폰 갯수": selectedEventData[4],
        "시작 날짜": selectedEventData[6],
        "종료 날짜": selectedEventData[7],
        쿠폰명: selectedEventData[8],
        할인율: selectedEventData[9],
      };
      $("#detailModal").modal("show");
    },
    closeDetailModal() {
      $("#detailModal").modal("hide");
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.newEvent.eventImage = file;
    },
    async registerEvent() {
      const { post } = useAPI();
      try {
        const formData = new FormData();
        Object.keys(this.newEvent).forEach((key) => {
          formData.append(key, this.newEvent[key]);
        });
        await post("/admin/event-create", formData);
        console.log("New Event:", this.newEvent);
        this.fetchData();
      } catch (error) {
        console.error("이벤트 등록 중 오류가 발생했습니다:", error);
      }
    },
    openModal() {
      $("#eventModal").modal("show");
    },
    closeModal() {
      $("#eventModal").modal("hide");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}년 ${month}월 ${day}일`;
    },
    formatPercentage(value) {
      return `${value}%`;
    },
    formatNumber(value){
      return `${value}개`;
    }
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped></style>
