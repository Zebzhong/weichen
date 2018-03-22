<template>
  <div id="webHome">
    {{msg}}
  </div>
</template>
<script>
import { formatTime } from '@/js/unit'
export default {
  name: 'webHome',
  data () {
    return {
      msg: 'init'
    }
  },
  created () {
    this.msg = 'Hello Word ' + formatTime(new Date())
  }
}
</script>
