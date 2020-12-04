<template>
  <section>
    <el-card class="services-container">
      <div class="title">
        <p class="title">گزارش زنده وضعیت سرویس ها</p>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">شبکه</p>
        <el-button type="success status" icon="el-icon-check" circle></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">اینترنت</p>
        <el-button type="success status" icon="el-icon-check" circle></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">ایمیل</p>
        <el-button type="success status" icon="el-icon-check" circle></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">زیرساخت</p>
        <el-button type="success status" icon="el-icon-check" circle></el-button>
      </div>
      <div class="service-item">
        <p class="service-name text--secondary">HPC</p>
        <el-button type="success status" icon="el-icon-check" circle></el-button>
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
  min-width: 250px;
}
button.status {
  width: 40px;
  height: 40px;
  cursor: initial;
}
.report-btn {
  margin-top: 20px;
  width: 100%;
}
.services-container {
  width: 350px;
}
</style>
