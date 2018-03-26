<template>
  <div>
      <header>
          <div class="tab-nav">
              <a>纸条</a>
              <a>作业</a>
          </div>
      </header>
      <div class="tab-content">
          <div>
              <router-view></router-view>
          </div>
          <div></div>
      </div>

      <foot-bottom :active=1></foot-bottom>
  </div>
</template>
<script>
import footBottom from '@/components/Footer'
export default {
  data () {
    return {}
  },
  components: {
    footBottom
  }
}
</script>
