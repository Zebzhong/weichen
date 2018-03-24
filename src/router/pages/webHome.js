const home = r => require.ensure([], () => r(require('@/page/Home')), 'home')
const lesson = r => require.ensure([], () => r(require('@/page/Lesson')), 'lesson')

export default {
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/lesson',
      component: lesson
    }
  ]
}
