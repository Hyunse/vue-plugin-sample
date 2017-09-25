<template>
  <div id="app">
    <button @click="showModal">모달!</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    showModal () {
      this.$modal.open('알림', '모달이 나왔습니다.', '닫기');
    }
  }
}
</script>

<style>
</style>
