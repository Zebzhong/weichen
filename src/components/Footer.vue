<template>
  <footer class="foot">
    <ul class="foot-list">
      <li @click="jumpUrl(item)" v-bind:key="item.id" :class="item.active?'active':''" v-for="item in navList">
        <a>{{item.name}}</a>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  props: {
    // 需要高亮的导航图标 , 传入索引 从0开始
    active: {
      type: Number,
      default: 0
    }

  },
  data () {
    return {
      navList: [
        {id: 0, name: '首页', active: false, url: '/home'},
        {id: 1, name: '纸条', active: false, url: '/noteIndex'},
        {id: 2, name: '课程', active: false, url: '/lessonTable'},
        {id: 3, name: '我', active: false}
      ]
    }
  },
  methods: {
    jumpUrl (item) {
      this.$router.push(item.url)
    }
  },
  created () {
    this.navList[this.active].active = true
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variable.scss';
.foot{
  position: fixed;
  z-index:100;
  bottom:0;
  width:100%;
  background-color: #dfdfdf;
  border-top: 1px solid transparent;
  border-image: svg(1px-border param(--color #757575) 2 2 stretch);
  @at-root .foot-list{
    display: flex;
    height:97px;
    li{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      height:100%;
      a{
        width:100%;
        box-sizing: border-box;
        padding-top:50px;
        font-size:24px;
        text-align: center;
      }
      &:nth-child(1){
        a{
          background:url('../assets/images/home.png') no-repeat center top;
          background-size:48px 44px;
        }
      }
      &:nth-child(2){
        a{
          background:url('../assets/images/zhitiao.png') no-repeat center top;
          background-size:50px 44px;
        }
      }
      &:nth-child(3){
        a{
          background:url('../assets/images/kebiao.png') no-repeat center top;
          background-size:46px 44px;
        }
      }
      &:nth-child(4){
        a{
          background:url('../assets/images/wo.png') no-repeat center top;
          background-size:36px 44px;
        }
      }
    }
    .active{
      a{
        color:$green;
      }
      &:nth-child(1){
        a{
          background:url('../assets/images/home-active.png') no-repeat center top;
          background-size:48px 44px;
        }
      }
      &:nth-child(2){
        a{
          background:url('../assets/images/zhitiao-active.png') no-repeat center top;
          background-size:50px 44px;
        }
      }
      &:nth-child(3){
        a{
          background:url('../assets/images/kebiao-active.png') no-repeat center top;
          background-size:46px 44px;
        }
      }
      &:nth-child(4){
        a{
          background:url('../assets/images/wo-active.png') no-repeat center top;
          background-size:36px 44px;
        }
      }
    }
  }
}
</style>
