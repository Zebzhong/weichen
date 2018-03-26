const home = r => require.ensure([], () => r(require('@/page/Home')), 'home')
const lesson = r => require.ensure([], () => r(require('@/page/Lesson')), 'lesson')
const noteIndex = r => require.ensure([], () => r(require('@/page/note/noteIndex')), 'noteIndex')

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
    },
    {
      path: '/noteIndex',
      component: noteIndex
    }
  ]
}
