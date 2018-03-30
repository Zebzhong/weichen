<template>
  <div>
      <myheader class="header">
        <div class="tab-nav">
          <span class="tab-nav-item">纸条</span>
          <span class="tab-nav-item">作业</span>
        </div>
      </myheader>
      <div class="tab-content">
          <div>
              <div>
                  <!-- <router-link>纸条社区</router-link> -->
              </div>
              <!-- <router-view></router-view> -->
          </div>
          <div></div>
      </div>

      <foot-bottom :active=1></foot-bottom>
  </div>
</template>
<script>
import footBottom from '@/components/Footer'
import myheader from '@/components/Header'
import { ButtonTab, ButtonTabItem } from 'vux'
export default {
  data () {
    return {}
  },
  components: {
    footBottom, myheader, ButtonTab, ButtonTabItem
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
      }
    }
  }
</style>
