<template>
<div id="app">
  <transition name="router-fade">
    <router-view></router-view>
  </transition>
  <div class="border"></div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import './style/reset';
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
.border{
  width: 32px;
  height: 40px;
  background-color: orange;
  border-bottom: 1px solid transparent;
  margin-bottom: 15px;
	border-image: svg(1px-border param(--color #333)) 2 2 stretch;
}
</style>
