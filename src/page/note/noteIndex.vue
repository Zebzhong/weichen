<template>
  <div>
      <myheader>
          <div class="tab-nav">
              <a>纸条</a>
              <a>作业</a>
          </div>
      </myheader>
      <div class="tab-content">
          <div>
              <div>
                  <router-link>纸条社区</router-link>
              </div>
              <router-view></router-view>
          </div>
          <div></div>
      </div>

      <foot-bottom :active=1></foot-bottom>
  </div>
</template>
<script>
import footBottom from '@/components/Footer'
import myheader from '@/components/Header'
export default {
  data () {
    return {}
  },
  components: {
    footBottom, myheader
  }
}
</script>
