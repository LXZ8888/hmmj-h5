<template>
  <div class="login-page">
    <!-- 登录页 -->

    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        label="用户名"
        placeholder="用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link to="/register" class="link">注册账号</router-link>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      // 放到一个对象里面，方便统一管理
      user: {
        username: 'admin1234',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '账号至少5位' }
        ],
        password: [
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少6位' }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
