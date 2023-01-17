let microPath = ''
// if (window.__POWERED_BY_QIANKUN__) {
//   console.log('我进到微服务啦');
//   microPath = '/vue'
// }

const routes = [
  {
    path: microPath + '/',
    redirect: microPath + '/home'
  },
  {
    name: 'Home',
    path: microPath + '/home',
    component: () => import('@/views/Home')
  },
  {
    name: 'About',
    path: microPath + '/about',
    component: () => import('@/views/About')
  }
];

export default routes;