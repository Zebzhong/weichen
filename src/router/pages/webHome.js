const home = r => require.ensure([], () => r(require('@/page/home/Home')), 'home')
const lesson = r => require.ensure([], () => r(require('@/page/home/Lesson')), 'lesson')
const noteIndex = r => require.ensure([], () => r(require('@/page/note/noteIndex')), 'noteIndex')
const lessonTable = r => require.ensure([], () => r(require('@/page/lessontable/Lessontable')), 'lessonTable')
const noteCommunity = r => require.ensure([], () => r(require('@/page/note/noteCommunity')), 'noteCommunity')
const myNote = r => require.ensure([], () => r(require('@/page/note/myNote')), 'myNote')
const writeNote = r => require.ensure([], () => r(require('@/page/note/writeNote')), 'writeNote')
// writeNote
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
      component: noteIndex,
      children: [
        {
          path: '',
          redirect: 'community'
        },
        {
          path: 'community',
          component: noteCommunity
        },
        {
          path: 'myNote',
          component: myNote
        },
        {
          path: 'writeNote',
          component: writeNote
        }
      ]
    },
    {
      path: '/lessonTable',
      component: lessonTable
    }
  ]
}
