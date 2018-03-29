const home = r => require.ensure([], () => r(require('@/page/home/Home')), 'home')
const lesson = r => require.ensure([], () => r(require('@/page/home/Lesson')), 'lesson')
const noteIndex = r => require.ensure([], () => r(require('@/page/note/noteIndex')), 'noteIndex')
const lessonTable = r => require.ensure([], () => r(require('@/page/lessontable/Lessontable')), 'lessonTable')

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
    },
    {
      path: '/lessonTable',
      component: lessonTable
    }
  ]
}
