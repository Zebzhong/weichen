<template>
  <section class="tab-box">
    <nav class="tab-nav">
      <div class="tab-nav-top">
        <a :class="['tab-nav-item',{'active':index === tabIndx}]"
        @click="switchTab(index)" v-for="(item,index) in tabNav" :key="index">
        {{item}}
        </a>
      </div>
      <div class="tab-border"></div>
    </nav>
    <section class="tab-cont" :class="{'active':0 === tabIndx}">
      <div class="tab-cont-item"  v-for="(item,index) in lessonList" :key="index">
        <div class="cont-item-img">
          <a>
            <img :src="item.imgUrl" alt="">
          </a>
        </div>
        <div class="cont-item-intro">
          <h3 class="item-intro-tit ellipsis">{{item.title}}</h3>
          <p class="item-intro-subtit ellipsis">{{item.subtit}}</p>
          <div class="item-intro-info">
            <i>{{item.view}}次学习</i>
            <a :class="[item.price === 0 ? 'ft-green':'ft-orange']">{{item.price | formatPrice}}</a>
          </div>
        </div>
      </div>
    </section>
    <section class="tab-cont" :class="{'active':1 === tabIndx}">
      <div class="tab-cont-item">精品小课</div>
    </section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tabIndx: 0,
      tabNav: ['系列课程', '精品小课']
    }
  },
  props: ['lessonList'],
  filters: {
    formatPrice (value) {
      return value === 0 ? '免费' : '¥' + value
    }
  },
  methods: {
    switchTab (index) {
      this.tabIndx = index
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/variable.scss";
.tab-box {
  @at-root .tab-nav-top {
    display: flex;
    justify-content: space-between;
    background-color: #fcfcfc;
    @at-root .tab-nav-item {
      width: 50%;
      height: 88px;
      line-height: 88px;
      color: $green;
      font-size: 36px;
      text-align: center;
      background-color: #fff;
      border-bottom: 3px solid #bfbfbf;
    }
    .active {
      color: $orange;
      border-color: $orange;
    }
  }
}
.tab-cont{
  display: none;
}
.tab-cont.active{
  display: block;
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
