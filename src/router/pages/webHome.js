const home = r => require.ensure([], () => r(require('@/page/Home')), 'home')

export default {
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}
