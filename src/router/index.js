import Vue from 'vue'
import Router from 'vue-router'
import page from './pages/webHome'

Vue.use(Router)

var routers = []
routers = routers.concat(page.routes)

export default new Router({
  routes: routers
})
