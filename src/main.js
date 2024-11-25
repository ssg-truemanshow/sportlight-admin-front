import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'


// jQuery 관련
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

// Select2
import 'select2'
import 'select2/dist/css/select2.min.css'

// Bootstrap 관련
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Perfect Scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

// jQuery용 Perfect Scrollbar 플러그인 정의
jQuery.fn.perfectScrollbar = function(options) {
  return this.each(function() {
    if (typeof PerfectScrollbar !== 'undefined') {
      new PerfectScrollbar(this, options);
    }
  });
};

// D3 버전 명시적 import
import * as d3 from 'd3'
window.d3 = d3

// C3
import * as c3 from 'c3'
window.c3 = c3

// Chartist - 수정된 부분
import * as ChartistLib from 'chartist'
import { BarChart, LineChart, PieChart } from 'chartist'

// Chartist를 전역 객체로 설정
window.Chartist = {
    ...ChartistLib,
    Bar: BarChart,
    Line: LineChart,
    Pie: PieChart,
    plugins: {}
}

// Chartist 플러그인
import 'chartist-plugin-tooltips'

// Feather Icons
import feather from 'feather-icons'
window.feather = feather

// CSS 파일들 import
import '../src/assets/libs/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/extra-libs/c3/c3.min.css'
import '../src/assets/libs/chartist/dist/chartist.min.css'
import '../src/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css'
import '../src/css/style.min.css'

// JS 파일들 import
import '../src/js/app-style-switcher.js'
import '../src/js/feather.min.js'
import '../src/js/sidebarmenu.js'
import '../src/js/custom.min.js'

// 차트 관련 JS 파일들
import '../src/assets/extra-libs/c3/d3.min.js'
import '../src/assets/extra-libs/c3/c3.min.js'
import '../src/assets/libs/chartist/dist/chartist.min.js'
import '../src/assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js'
import '../src/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js'
import '../src/assets/extra-libs/jvector/jquery-jvectormap-world-mill-en.js'

const app = createApp(App);
const pinia = createPinia()


app.use(router);
app.use(pinia);
app.mount('#app');

// jQuery 플러그인 초기화를 하는 것이 아닌 app.config로 ㄱㄱ
app.config.globalProperties.$nextTick(() => {
    console.log(typeof jQuery); // "function"이 출력되어야 합니다.
    
    // Select2 초기화
    if ($('select').length) {
        $('select').select2(); // Select2 초기화
    } else {
        console.error('Select element not found');
    }

    // Bootstrap tooltips & popovers
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // dashboard1.min.js 파일 import
    import('../src/js/pages/dashboards/dashboard1.js')
        .then(() => {
            console.log('Dashboard scripts loaded');
        })
        .catch(err => {
            console.error('Error loading dashboard scripts:', err);
        });
});
