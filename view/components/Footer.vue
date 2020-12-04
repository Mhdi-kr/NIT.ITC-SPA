<template>
  <footer>
    <el-card shadow="0">
      <div class="footer">
        <div class="centered">asd</div>
        <div class="centered">asd</div>
        <div class="centered">asd</div>
      </div>
    </el-card>
    <div class="bottom-footer">
      تمامی حقوق متعلق به مرکز فناوری اطلاعات و ارتباطات دانشگاه صنعتی نوشیروانی
      بابل می باشد.
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 60px;
}
.centered {
  display: flex;
  justify-content: center;
}
.bottom-footer {
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0.4rem;
  font-size: 9pt;
  background-color: #dcdfe6;
}
</style>
