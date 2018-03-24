<template>
  <div id="webHome">
    <div class="container">
      <header class="head">
        <input type="text" class="search" placeholder="搜索">
        <a class="msg-btn"></a>
      </header>
      <section class="slider"></section>
      <nav class="lesson-list">
        <a class="lesson-item" v-for="(item,index) in lessonNav" :key="index">
          <img class="lesson-item-icon" :src="item.imgUrl" alt="">
          <span class="lesson-item-name">{{item.lessonName}}</span>
        </a>
      </nav>
      <section class="tab-box">
        <nav class="tab-nav">
          <div class="tab-nav-top">
            <a class="tab-nav-item active">系列课程</a>
            <a class="tab-nav-item">精品小课</a>
          </div>
          <div class="tab-border"></div>
        </nav>
        <section class="tab-cont">
          <div class="tab-cont-item" v-for="(item,index) in lessonList" :key="index">
            <div class="cont-item-img">
              <a>
                <img :src="item.imgUrl" alt="">
              </a>
            </div>
            <div class="cont-item-intro">
              <h3 class="item-intro-tit">{{item.title}}</h3>
              <p class="item-intro-subtit">{{item.subtit}}</p>
              <div class="item-intro-info">
                <i>{{item.view}}次学习</i>
                <a class="ft-green">{{item.price | formatPrice}}</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
import { formatTime } from '@/js/unit'
export default {
  name: 'webHome',
  data () {
    return {
      msg: 'init',
      lessonNav: [
        {
          lessonName: '语文',
          imgUrl: require('../assets/images/yuwen.png')
        },
        {
          lessonName: '数学',
          imgUrl: require('../assets/images/shuxue.png')
        },
        {
          lessonName: '英语',
          imgUrl: require('../assets/images/yingyu.png')
        },
        {
          lessonName: '政治',
          imgUrl: require('../assets/images/zhengzhi.png')
        },
        {
          lessonName: '历史',
          imgUrl: require('../assets/images/lishi.png')
        },
        {
          lessonName: '地理',
          imgUrl: require('../assets/images/dili.png')
        },
        {
          lessonName: '化学',
          imgUrl: require('../assets/images/huaxue.png')
        },
        {
          lessonName: '生物',
          imgUrl: require('../assets/images/shengwu.png')
        },
        {
          lessonName: '物理',
          imgUrl: require('../assets/images/wuli.png')
        },
        {
          lessonName: '其他',
          imgUrl: require('../assets/images/qita.png')
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
  created () {
    this.msg = 'Hello Word ' + formatTime(new Date())
  },
  filters: {
    formatPrice: function (value) {
      if (value === 0) return '免费'
      return '¥' + value
    }
  }
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
.container{
  // padding-top:84px;
  background-color:#d2d2d2;
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
.tab-box{
  @at-root .tab-nav-top{
    display: flex;
    justify-content: space-between;
    background-color: #fcfcfc;
    @at-root .tab-nav-item{
      width: 50%;
      height: 88px;
      line-height: 88px;
      color: $green;
      font-size: 36px;
      text-align: center;
      background-color: #fff;
      border-bottom:3px solid #bfbfbf;
    }
    .active{
      color: $orange;
      border-color:$orange;
    }
  }
}
.tab-cont-item{
  height:200px;
  box-sizing: border-box;
  padding:25px 0;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 2px;
  @at-root .cont-item-img{
    width: 50%;
    height:150px;
    float: left;
    display: flex;
    justify-content: center;
    img{
      width:300px;
      height:100%;
    }
  }
  @at-root .cont-item-intro{
    width:50%;
    float: left;
    box-sizing: border-box;
    padding-right:33px;
    color:$gray3;
    @at-root .item-intro-tit{
      font-size:30px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @at-root .item-intro-subtit{
      font-size:24px;
      height:70px;
      overflow: hidden;
    }
    @at-root .item-intro-info{
      display: flex;
      justify-content: space-between;
      font-size:24px;
      color:#757575;
    }
  }
}
</style>
