<template>
  <div class="container">
    <header class="head-bar">
      <a class="head-goback" @click="goback"></a>
      <section class="head-tit">{{headTitle}}</section>
      <a class="head-search"></a>
    </header>
    <tab-box :lessonList="lessonList"></tab-box>
  </div>
</template>
<script>
import tabBox from '@/components/TabBox'
export default {
  name: 'lesson',
  data () {
    return {
      headTitle: '',
      lessonList: [
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_1.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_2.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_1.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_1.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_1.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../assets/images/series_1.png'),
          view: '2145',
          price: 0
        }
      ]
    }
  },
  components: {
    tabBox
  },
  mounted () {
    const query = this.$route.query
    this.headTitle = query.lessonName
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/variable.scss';
.container{
  background-color:#d2d2d2;
}
.head-bar{
  /* position: fixed;
  top:0;
  left:0;
  z-index:10; */
  padding:0 30px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:84px;
  background-color: $green;
  position:relative;
  .head-goback{
    background:url('../assets/images/fanhui_03.png') no-repeat center left;
    background-size:24px 48px;
    width:60px;
    height:100%;
  }
  .head-tit{
    position: absolute;
    left:50%;
    transform: translate3d(-50%,0,0);
    width:50%;
    text-align:center;
    color:#fff;
    line-height:84px;
  }
  .head-search{
    background:url('../assets/images/serach_course.png') no-repeat center right;
    background-size:40px 40px;
    width:60px;
    height:100%;
  }
}
</style>
