<template>
  <div class="login-body">
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {}
}
</script>
<style lang="scss" scoped>
.login-body {
  position: fixed;
  z-index: 9999;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(60deg, #1a5cff, #f904fe);
  .login-card {
    position: relative;
    padding: 20px;
    width: 400px;
    border-radius: 15px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    // backdrop-filter: blur(5px);
    h1 {
      font-weight: 6rem;
    }
  }
}
</style>
