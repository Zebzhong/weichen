<template>
  <header>
    <!-- <router-link to= class="goback"></router-link> -->
    <div class="header-content">
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variable.scss';
header {
  padding:0 30px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:84px;
  background-color: $green;
  position: relative;
}
.header-btn{
  position: absolute;
  right: 0;
}
.header-content{
  width: 100%;
  text-align: center;
}
</style>
