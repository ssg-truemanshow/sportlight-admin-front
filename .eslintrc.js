module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true,  // jQuery 전역 변수 허용
      browser: true, // 브라우저 전역 변수 허용
      amd: true      // AMD 모듈 시스템 허용
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-undef': 'off',                // 정의되지 않은 변수 허용
      'no-unused-vars': 'off',          // 사용되지 않은 변수 허용
      'no-prototype-builtins': 'off',   // prototype 빌트인 메소드 허용
      'no-cond-assign': 'off',          // 조건문 내 할당 허용
      'no-redeclare': 'off',            // 변수 재선언 허용
      'no-useless-escape': 'off',       // 불필요한 이스케이프 허용
      'no-control-regex': 'off',        // 정규식 내 제어 문자 허용
      'no-self-assign': 'off',          // 자기 자신 할당 허용
      'no-extra-semi': 'off',           // 불필요한 세미콜론 허용
      'no-fallthrough': 'off',         // switch문 fallthrough 허용
      'no-empty': 'off',  // 빈 블록 문 허용
    },
    globals: {
      '$': true,
      'jQuery': true,
      'Chartist': true,
      'feather': true,
      'd3': true,
      'c3': true
    }
  }