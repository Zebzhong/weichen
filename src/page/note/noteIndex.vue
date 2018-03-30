<template>
  <div>
      <myheader class="header">
        <div class="tab-nav">
          <span @click="tabNavActive = !tabNavActive" class="tab-nav-item" :class="tabNavActive?'active':''">纸条</span>
          <span @click="tabNavActive = !tabNavActive" class="tab-nav-item" :class="!tabNavActive?'active':''">作业</span>
        </div>
      </myheader>
      <div class="tab-content">
          <div v-if="tabNavActive">
              <div id="tab-btn">
                  <router-link to="community">纸条社区</router-link>
                  <router-link to="myNote">我的纸条</router-link>
                  <router-link to="writeNote">去贴纸条</router-link>
              </div>
              <router-view></router-view>
          </div>
          <div v-if="!tabNavActive">
            作业
          </div>
      </div>

      <foot-bottom :active=1></foot-bottom>
  </div>
</template>
<script>
import footBottom from '@/components/Footer'
import myheader from '@/components/Header'
export default {
  data () {
    return {
      tabNavActive: true
    }
  },
  components: {
    footBottom, myheader
  }
}
</script>
<style scoped lang="scss">
@import '../../style/variable.scss';
  .header {
    .tab-nav {
      .tab-nav-item{
        padding: 5px 40px;
        background-color: $green;
        border-radius: 5px;
        border: 1px solid #ffffff;
        color: #ffffff;
        margin-left: -11px;
        &:first-child{
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-child{
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      .active{
        background-color: #ffffff;
        color: $green;
      }
    }
  }
  .tab-content{
    #tab-btn{
      display: flex;
      a{
        flex: 1;
        text-align: center;
        padding: 10px;
        border-bottom: 4px solid $backgroundColor;
      }
      .router-link-active{
        color: $orange;
        border-bottom-color: $orange;
      }
    }
  }
</style>
