<template>
    <div class="main-wrapper">
      <!-- Preloader -->
      <div class="preloader">
        <div class="lds-ripple">
          <div class="lds-pos"></div>
          <div class="lds-pos"></div>
        </div>
      </div>
  
      <!-- Login box -->
      <div class="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative">

        <div class="auth-box row">
          <div class="col-lg-7 col-md-5 modal-bg-img" style="background-image: url(../assets/images/SportLightImage.webp);">
          </div>
          <div class="col-lg-5 col-md-7 bg-white">
            <div class="p-3">
              <div class="text-center">
                <img src="../assets/images/SportLightBrand.png" width="170" height="auto" alt="wrapkit">
              </div>
              <h2 class="mt-3 text-center">관리자 로그인</h2>
              <form @submit.prevent="login" class="mt-4">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="text-dark" for="uname">이메일</label>
                      <input class="form-control" id="uname" type="text" v-model="username" placeholder="enter your admin email" required>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="text-dark" for="pwd">비밀번호</label>
                      <input class="form-control" id="pwd" type="password" v-model="password" placeholder="enter your password" required>
                    </div>
                  </div>
                  <div class="col-lg-12 text-center">
                    <button type="submit" class="btn btn-block btn-dark">Sign In</button>
                  </div>
                </div>
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
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 로그인 로직 (여기서는 간단히 성공적으로 로그인했다고 가정)
        // 실제로는 API 호출을 통해 인증을 처리해야 합니다.
        if (this.username && this.password) {
          // 로그인 성공 시 대시보드로 리다이렉트
          this.$router.push('/');
        }
      }
    }
  }
  </script>
  
  <style>
  /* 필요한 스타일 추가 */
  </style>