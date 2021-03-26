<template>
  <div class="login-card">
    <vs-input v-model="value1" placeholder="Email" class="input">
      <template #message-success>
        Email Valid
      </template>
      <template #icon>
        <i class="fas fa-user-shield"></i>
      </template>
    </vs-input>

    <vs-input type="password" v-model="value3" placeholder="Password">
      <template #message-warn>
        Insecure password
      </template>
      <template #icon>
        <i class="fas fa-key"></i>
      </template>
    </vs-input>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  layout: 'login',
  methods: {},
  created() {},
  mounted() {},
  computed: {}
}
</script>
<style lang="scss" scoped>
.input {
  background: red;
  padding: 0;
  * {
    width: 100%;
  }
}
</style>
