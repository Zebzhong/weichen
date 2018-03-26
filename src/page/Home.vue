<template>
  <div id="webHome">
    <div class="container">
      <header class="head">
        <input type="text" class="search" placeholder="搜索">
        <a class="msg-btn"></a>
      </header>
      <section class="slider"></section>
      <nav class="lesson-list">
        <router-link class="lesson-item" :to="{path: '/lesson', query: {lessonName: item.lessonName, id: item.id}}" v-for="(item,index) in lessonNav" :key="index">
          <img class="lesson-item-icon" :src="item.imgUrl" alt="">
          <span class="lesson-item-name">{{item.lessonName}}</span>
        </router-link>
      </nav>
      <tab-box :lessonList="lessonList"></tab-box>
      <foot-bottom :active=0></foot-bottom>
    </div>
  </div>
</template>
<script>
import tabBox from '@/components/TabBox'
import footBottom from '@/components/Footer'
export default {
  name: 'webHome',
  data () {
    return {
      msg: 'init',
      lessonNav: [
        {
          lessonName: '语文',
          imgUrl: require('../assets/images/yuwen.png'),
          id: 1
        },
        {
          lessonName: '数学',
          imgUrl: require('../assets/images/shuxue.png'),
          id: 2
        },
        {
          lessonName: '英语',
          imgUrl: require('../assets/images/yingyu.png'),
          id: 3
        },
        {
          lessonName: '政治',
          imgUrl: require('../assets/images/zhengzhi.png'),
          id: 4
        },
        {
          lessonName: '历史',
          imgUrl: require('../assets/images/lishi.png'),
          id: 5
        },
        {
          lessonName: '地理',
          imgUrl: require('../assets/images/dili.png'),
          id: 6
        },
        {
          lessonName: '化学',
          imgUrl: require('../assets/images/huaxue.png'),
          id: 7
        },
        {
          lessonName: '生物',
          imgUrl: require('../assets/images/shengwu.png'),
          id: 8
        },
        {
          lessonName: '物理',
          imgUrl: require('../assets/images/wuli.png'),
          id: 9
        },
        {
          lessonName: '其他',
          imgUrl: require('../assets/images/qita.png'),
          id: 10
        }
      ],
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
        }
      ]
    }
  },
  components: {
    tabBox,
    footBottom
  }
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
.container{
  // padding-top:84px;
  background-color:#d2d2d2;
  padding-bottom: 98px;
  box-sizing: border-box;
  min-height: 100vh;
}
.head{
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
  .search{
    width:620px;
    height:60px;
    line-height: 60px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 64px;
    background: #fff url('../assets/images/search.png') no-repeat;
    background-position: 24px center;
    background-size:31px 31px;
  }
  .msg-btn{
    width:35px;
    height: 35px;
    background: url('../assets/images/top_msg.png') no-repeat;
    background-size: cover;
  }
}
.slider{
  height:268px;
  background-color:#d2d2d2;
}
.lesson-list{
  padding:8px 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  background-color: #fff;
  .lesson-item{
    width:20%;
    height:144px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .lesson-item-icon{
      width:80px;
      height: 80px;
      margin-bottom:14px;
    }
    .lesson-item-name{
      font-size:24px;
      color:$gray3;
    }
  }
}
</style>
