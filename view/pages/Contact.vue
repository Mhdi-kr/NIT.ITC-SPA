<template>
  <div>
      <el-card>
          <div class="columns">
            <div class="column is-4">
                <p>سلام با استفاده از فرم زیر دیتا بفرستید
                </p>
              </div>
              <div class="column is-8">
                <form action="post">
                    <el-input placeholder="نام کامل" v-model="name" class="mb-2"></el-input>
                    <el-input placeholder="" class="mb-2"></el-input>
                    <el-input placeholder="" class="mb-2"></el-input>
                    <el-input placeholder="" class="mb-2"></el-input>
                    <el-button>ارسال</el-button>
                </form>
              </div>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
    name: 'Contact',
    layout: 'main',
    data: () => ({
        name: ''
    })
}
</script>
<style>

</style>