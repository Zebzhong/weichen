<template>
  <div>
    <header class="head">
      <div class="tab-nav">
        <a class="tab-nav-item" @click="tabIndex = 0" :class="{'active': tabIndex === 0}">课表</a>
        <a class="tab-nav-item" @click="tabIndex = 1" :class="{'active': tabIndex === 1}">笔记</a>
      </div>
    </header>
    <div class="container">
      <div class="tab-cont" v-show="tabIndex === 0">
        <datepicker :value="dateConfig.date" :language="dateConfig.language" :inline="dateConfig.inline" :calendar-class="dateConfig.calendarStyle" :wrapper-class="dateConfig.wrapperStyle">
        </datepicker>
      </div>
      <div class="tab-cont" v-show="tabIndex === 1">
        哈哈
      </div>
    </div>
    <foot-bottom :active=2 ></foot-bottom>
  </div>
</template>
<script>
import footBottom from '@/components/Footer'
import Datepicker from 'vuejs-datepicker'
const dateConfig = {
  date: new Date(),
  wrapperStyle: 'out-calendar',
  calendarStyle: 'calendar',
  inline: true,
  language: 'zh'
}
export default {
  data () {
    return {
      tabIndex: 0,
      dateConfig
    }
  },
  components: {
    footBottom,
    Datepicker
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
.head{
  position: fixed;
  top:0;
  left:0;
  z-index:10;
  padding:0 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height:84px;
  background-color: $green;
  @at-root .tab-nav{
    @include wh(400px,60px);
    border:2px solid #fff;
    display: flex;
    border-radius: 6px;
    @at-root .tab-nav-item{
      flex:1;
      height:56px;
      line-height: 56px;
      text-align: center;
      color:#fff;
    }
    .active{
      color: $green;
      background-color: #fff;
    }
  }
}
.container{
  background-color:$backgroundColor;
  padding-top:84px;
  padding-bottom: 98px;
  min-height: 100vh;
}
.out-calendar .calendar{
  .calendar{
    width: 100%;
    background: orange;
  }
}
</style>
