<template>
  <section>
    <el-card class="services-container">
      <div class="title">
        <p class="title">گزارش زنده وضعیت سرویس ها</p>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">شبکه</p>
        <el-button
          type="success status"
          icon="el-icon-check"
          circle
        ></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">اینترنت</p>
        <el-button
          type="success status"
          icon="el-icon-check"
          circle
        ></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">ایمیل</p>
        <el-button
          type="success status"
          icon="el-icon-check"
          circle
        ></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">زیرساخت</p>
        <el-button
          type="success status"
          icon="el-icon-check"
          circle
        ></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">HPC</p>
        <el-button
          type="success status"
          icon="el-icon-check"
          circle
        ></el-button>
      </div>
      <div class="service-item text--secondary">
        <el-button class="report-btn" type="warning">گزارش اشکال</el-button>
      </div>
    </el-card>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.heartbeat {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.title {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.service-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}
.service-name {
  font-size: 12pt;
  width: 100%;
  min-width: 150px;
}
button.status {
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: initial;
}
.report-btn {
  margin-top: 20px;
  width: 100%;
}
</style>
