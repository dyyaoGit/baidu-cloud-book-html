import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/index/index')
    },
    {
      path: '/momentDemo',
      component: () => import('@/views/momentDemo')
    },

    {
      path: '/layout2',
      name: 'layout2',
      component: () => import('@/views/layout-header'),
      children: [
        {
          path: '/details/:id',
          name: 'details',
          meta: {
            title: '书籍详情'
          },
          component: () => import('@/views/details')
        },
        {
          path: '/titles/:id',
          name: 'titles',
          meta: {
            title: '目录'
          },
          component: () => import('@/views/titles')
        },
        {
          path: '/article/:id',
          name: 'article',
          meta: {
            title: '文章'
          },
          component: () => import('@/views/article')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '云书';
  next();
})

export default router;
