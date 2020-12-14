<template>
  <div class="login-page">
    <el-card shadow="always" class="login-container slide-in-bck-center">
      <img :src="require('~/static/images/login.png')" class="image mb-3" />
      <form action="submit">
        <el-input
          placeholder="نام کاربری"
          class="mb"
          v-model="auth.username"
        ></el-input>
        <el-input
          placeholder="رمز عبور"
          class="mb"
          v-model="auth.password"
          type="password"
        ></el-input>
        <el-button
          class="has-primary-gradient"
          type="primary block"
          @click="authenticate"
          :loading="button.isLoading"
          >{{ button.label }}</el-button
        >
      </form>
    </el-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    auth: {
      username: undefined,
      password: undefined,
    },
    button: {
      label: 'ورود به پنل',
      isLoading: false,
    },
  }),
  methods: {
    async authenticate() {
      this.button.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            input: this.auth.username,
            password: this.auth.password,
          },
        })
        console.log(response)
        this.$auth.setUser(response.data)
        this.$auth.$storage.setLocalStorage('user', response.data, false)
        console.log(response.data)
      } catch (err) {
        this.$alert(err, 'خطای ورود', {
          confirmButtonText: 'متوجه شدم',
        })
      }
      this.button.isLoading = false
    },
  },
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 237, 237, 1) 100%
  );
}
/* TODO full screen on mobile */
.login-container {
  width: 350px;
}
.image {
  width: 100%;
  border-radius: 14px 14px 0 0;
}
</style>
