<template>
  <div>
    <div class="preloader">
      <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
      </div>
    </div>

    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <!-- Topbar header -->
      <header class="topbar" data-navbarbg="skin6">
        <!-- 현재 index.html의 header 내용 -->
        <nav class="navbar top-navbar navbar-expand-md">
          <div class="navbar-header" data-logobg="skin6">
            <!-- This is for the sidebar toggle which is visible on mobile only -->
            <a
              class="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
              ><i class="ti-menu ti-close"></i
            ></a>
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <div class="navbar-brand">
              <!-- Logo icon -->
              <!-- <a href="index.html"> -->
              <b class="logo-icon">
                <!-- Dark Logo icon -->
                <router-link to="/" class="sidebar-link">
                  <img
                    src="./assets/images/SportLightImage.webp"
                    alt="homepage"
                    class="dark-logo"
                    width="50"
                    height="auto"
                  />
                </router-link>
                <!-- Light Logo icon -->
                <router-link to="/" class="sidebar-link">
                  <img
                    src="./assets/images/SportLightImage.webp"
                    alt="homepage"
                    class="light-logo"
                    width="50"
                    height="auto"
                  />
                </router-link>
              </b>
              <!--End Logo icon -->
              <!-- Logo text -->
              <span class="logo-text">
                <!-- dark Logo text -->
                <router-link to="/" class="sidebar-link">
                  <img
                    src="./assets/images/SportLightBrand.png"
                    alt="homepage"
                    class="dark-logo"
                    width="150"
                    height="auto"
                  />
                </router-link>
                <!-- Light Logo text -->
                <router-link to="/" class="sidebar-link">
                  <img
                    src="./assets/images/SportLightBrand.png"
                    class="light-logo"
                    alt="homepage"
                    width="150"
                    height="auto"
                  />
                </router-link>
              </span>
            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Toggle which is visible on mobile only -->
            <!-- ============================================================== -->
            <a
              class="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ><i class="ti-more"></i
            ></a>
          </div>
          <!-- ============================================================== -->
          <!-- End Logo -->
          <!-- ============================================================== -->
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav float-left mr-auto ml-3 pl-1">
              <!-- Notification -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle pl-md-3 position-relative"
                  href="javascript:void(0)"
                  id="bell"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span><i data-feather="bell" class="svg-icon"></i></span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-left mailbox animated bounceInDown"
                >
                  <ul class="list-style-none">
                    <li>
                      <div
                        class="message-center notifications position-relative"
                      >
                        <!-- Message -->
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- End Notification -->
              <!-- ============================================================== -->
              <!-- create new -->
              <!-- ============================================================== -->
            </ul>
            <!-- ============================================================== -->
            <!-- Right side toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav float-right">
              <!-- ============================================================== -->
              <!-- Search -->
              <!-- ============================================================== -->
              <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="./assets/images/users/profile-pic.jpg"
                    alt="user"
                    class="rounded-circle"
                    width="40"
                  />
                  <span class="ml-2 d-none d-lg-inline-block"></span>
                  <span class="text-dark">이주환</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <aside class="left-sidebar" data-sidebarbg="skin6">
        <div class="scroll-sidebar" data-sidebarbg="skin6">
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="sidebar-item">
                <router-link to="/" class="sidebar-link">
                  <i data-feather="home" class="feather-icon"></i>
                  <span class="hide-menu">MAIN</span>
                </router-link>
              </li>
              <li class="list-divider"></li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="file-text" class="feather-icon"> </i
                  ><span class="hide-menu">회원관리</span></a
                >
                <ul
                  aria-expanded="false"
                  class="collapse first-level base-level-line"
                >
                  <li class="sidebar-item">
                    <router-link to="/host-change" class="sidebar-link">
                      <span class="hide-menu">강사 전환 요청</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/host-adjustment" class="sidebar-link">
                      <span class="hide-menu">강사 정산 요청</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/user" class="sidebar-link">
                      <span class="hide-menu">회원 목록</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="grid" class="feather-icon"></i>
                  <span class="hide-menu">클래스 관리</span></a
                >
                <ul
                  aria-expanded="false"
                  class="collapse first-level base-level-line"
                >
                  <li class="sidebar-item">
                    <router-link to="/class-register" class="sidebar-link">
                      <span class="hide-menu">클래스 등록 및 삭제 요청</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/class" class="sidebar-link">
                      <span class="hide-menu">클래스 목록</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="bar-chart" class="feather-icon"></i>
                  <span class="hide-menu">재무관리</span></a
                >
                <ul
                  aria-expanded="false"
                  class="collapse first-level base-level-line"
                >
                  <li class="sidebar-item">
                    <router-link to="/byperiodSale" class="sidebar-link">
                      <span class="hide-menu">매출 내역</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/payment" class="sidebar-link">
                      <span class="hide-menu">결제 내역</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/refund" class="sidebar-link">
                      <span class="hide-menu">환불 내역</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/dashboard" class="sidebar-link">
                      <span class="hide-menu">Dashboard</span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/business" class="sidebar-link">
                      <span class="hide-menu">Business Insight</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="box" class="feather-icon"></i>
                  <span class="hide-menu"> 프로모션 </span></a
                >
                <ul
                  aria-expanded="false"
                  class="collapse first-level base-level-line"
                >
                  <li class="sidebar-item">
                    <router-link to="/event" class="sidebar-link">
                      <span class="hide-menu"> 이벤트 </span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/coupon" class="sidebar-link">
                      <span class="hide-menu"> 쿠폰 </span>
                    </router-link>
                  </li>
                  <li class="sidebar-item">
                    <router-link to="/banner" class="sidebar-link">
                      <span class="hide-menu"> 배너 </span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="list-divider"></li>
            </ul>
          </nav>
          <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
      </aside>

      <!-- Page wrapper -->
      <div class="page-wrapper">
        <!-- Bread crumb -->
        <div class="page-breadcrumb">
          <div class="row">
            <div class="col-7 align-self-center">
              <h3
                class="page-title text-truncate text-dark font-weight-medium mb-1"
              >
                반갑습니다, 이주환 관리자님
              </h3>
            </div>
          </div>
        </div>

        <!-- 라우터 뷰 (페이지 내용이 여기에 표시됨) -->
        <router-view></router-view>

        <!-- Footer -->
        <footer class="footer text-center text-muted">
          All Rights Reserved by Adminmart. Designed and Developed by
          <a href="/main">SportLight</a>.
        </footer>
      </div>
    </div>
    <!-- 로그인 페이지일 경우 -->
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },
  mounted() {
    require("../src/js/app-style-switcher");
    require("../src/js/feather.min");
    require("../src/js/sidebarmenu");
    require("../src/js/custom.min");

    // jQuery(document).ready(() => {
    //     console.log(typeof jQuery);
    //     if (jQuery('select').length) {
    //         jQuery('select').select2();
    //     } else {
    //         console.error('Select element not found');
    //     }
    // });
  },
};
</script>

<style>
/* 필요한 스타일이 있다면 여기에 추가 */
</style>
