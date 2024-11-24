import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import HostChangePage from './components/HostChangePage.vue';
import HostAdjustmentPage from './components/HostAdjustmentPage.vue';
import UserPage from './components/UserPage.vue';
import ClassRegisterPage from './components/ClassRequestPage.vue';
import ClassPage from './components/ClassPage.vue';
import ByPeriodSalePage from './components/ByPeriodSalePage.vue';
import PaymentPage from './components/PaymentPage.vue';
import RefundPage from './components/RefundPage.vue';
import DashboardPage from './components/DashboardPage.vue';
import EventPage from './components/EventPage.vue';
import CouponPage from './components/CouponPage.vue';
import BannerPage from './components/BannerPage.vue';
import BusinessInsightPage from './components/BusinessInsightPage.vue';
import LoginPage from './views/LoginPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/main', // 기본 경로를 MainPage로 리다이렉트
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/host-change',
    name: 'HostChangePage',
    component: HostChangePage,
  },
  {
    path: '/host-adjustment',
    name: 'HostAdjustmentPage',
    component: HostAdjustmentPage,
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage,
  },
  {
    path: '/class-register',
    name: 'ClassRegisterPage',
    component: ClassRegisterPage,
  },
  {
    path: '/class',
    name: 'ClassPage',
    component: ClassPage,
  },
  {
    path: '/byperiodSale',
    name: 'ByPeriodSalePage',
    component: ByPeriodSalePage,
  },
  {
    path: '/payment',
    name: 'PaymentPage',
    component: PaymentPage,
  },
  {
    path: '/refund',
    name: 'RefundPage',
    component: RefundPage,
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
  },
  {
    path: '/business',
    name: 'BusinessInsightPage',
    component: BusinessInsightPage,
  },
  {
    path: '/event',
    name: 'EventPage',
    component: EventPage,
  },
  {
    path: '/coupon',
    name: 'CouponPage',
    component: CouponPage,
  },
  {
    path: '/banner',
    name: 'BannerPage',
    component: BannerPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
