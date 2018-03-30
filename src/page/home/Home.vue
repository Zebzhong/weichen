<template>
  <div id="webHome">
    <header class="head">
      <input type="text" class="search" placeholder="搜索">
      <a class="msg-btn"></a>
    </header>
    <div class="container">
      <section class="slider">
        <swiper :options="swiperOption" ref="mySwiper" class="myswiper">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <img :src="item.imgUrl" alt="" class="swiper-img">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
      <nav class="lesson-list">
        <router-link class="lesson-item" :to="{path: '/lesson', query: {lessonName: item.lessonName, id: item.id}}" v-for="(item,index) in lessonNav" :key="index">
          <img class="lesson-item-icon" :src="item.imgUrl" alt="">
          <span class="lesson-item-name">{{item.lessonName}}</span>
        </router-link>
      </nav>
      <tab-box :lessonList="lessonList" :goodList="goodList"></tab-box>
    </div>
    <foot-bottom :active=0></foot-bottom>
  </div>
</template>
<script>
import tabBox from '@/components/TabBox'
import footBottom from '@/components/Footer'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'webHome',
  data () {
    return {
      swiperList: [
        {
          imgUrl: require('../../assets/images/series_1.png')
        },
        {
          imgUrl: require('../../assets/images/series_2.png')
        },
        {
          imgUrl: require('../../assets/images/series_1.png')
        }
      ],
      lessonNav: [
        {
          lessonName: '语文',
          imgUrl: require('../../assets/images/yuwen.png'),
          id: 1
        },
        {
          lessonName: '数学',
          imgUrl: require('../../assets/images/shuxue.png'),
          id: 2
        },
        {
          lessonName: '英语',
          imgUrl: require('../../assets/images/yingyu.png'),
          id: 3
        },
        {
          lessonName: '政治',
          imgUrl: require('../../assets/images/zhengzhi.png'),
          id: 4
        },
        {
          lessonName: '历史',
          imgUrl: require('../../assets/images/lishi.png'),
          id: 5
        },
        {
          lessonName: '地理',
          imgUrl: require('../../assets/images/dili.png'),
          id: 6
        },
        {
          lessonName: '化学',
          imgUrl: require('../../assets/images/huaxue.png'),
          id: 7
        },
        {
          lessonName: '生物',
          imgUrl: require('../../assets/images/shengwu.png'),
          id: 8
        },
        {
          lessonName: '物理',
          imgUrl: require('../../assets/images/wuli.png'),
          id: 9
        },
        {
          lessonName: '其他',
          imgUrl: require('../../assets/images/qita.png'),
          id: 10
        }
      ],
      lessonList: [
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../../assets/images/series_1.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../../assets/images/series_2.png'),
          view: '2145',
          price: 0
        },
        {
          title: '小学语文精彩课程',
          subtit: '1-6单元详细讲解',
          imgUrl: require('../../assets/images/series_1.png'),
          view: '2145',
          price: 0
        }
      ],
      goodList: [
        {
          title: '中考语文精彩课程',
          subtit: '知识点精讲沪教版',
          imgUrl: require('../../assets/images/series_1.png'),
          view: '1255',
          price: 108
        },
        {
          title: '中考语文精彩课程',
          subtit: '知识点精讲人教版',
          imgUrl: require('../../assets/images/series_2.png'),
          view: '3215',
          price: 99.5
        },
        {
          title: '初一语文上学期',
          subtit: '古诗词文言文讲解',
          imgUrl: require('../../assets/images/series_1.png'),
          view: '1265',
          price: 53.6
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'slide-bullet',
          bulletActiveClass: 'slide-bullet-active'
        },
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    tabBox,
    footBottom,
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import '../../style/variable.scss';
.container{
  background-color:$backgroundColor;
  padding-top:84px;
  padding-bottom: 98px;
  box-sizing: border-box;
}
.head{
  position: fixed;
  top:0;
  left:0;
  z-index:10;
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
    background: #fff url('../../assets/images/search.png') no-repeat;
    background-position: 24px center;
    background-size:31px 31px;
  }
  .msg-btn{
    width:35px;
    height: 35px;
    background: url('../../assets/images/top_msg.png') no-repeat;
    background-size: cover;
  }
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
<style lang="scss">
@import '../../style/variable.scss';
.slider{
  height:268px;
  background-color:#d2d2d2;
  @at-root .myswiper{
    height: 100%;
    @at-root .swiper-img{
      width:100%;
      height:100%;
    }
    @at-root .slide-bullet {
      display: block;
      float:left;
      margin-left:11px;
      width:15px;
      height:15px;
      border:3px solid $green;
      border-radius: 50%;
    }
    @at-root .slide-bullet-active{
      background-color: $green;
    }
  }
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  position: absolute;
  left: initial;
  right:33px;
  bottom:15px;
  width:80px;
  height:15px;
  overflow: hidden;
}
</style>
