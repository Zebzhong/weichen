<template>
  <header>
    <router-link class="goback"></router-link>
    <div class="header-content">
      <slot></slot>
    </div>
    <router-link class="operationBtn"></router-link>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variable.scss';
</style>
