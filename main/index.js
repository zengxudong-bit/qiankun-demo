import 'zone.js'; // for angular subapp
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/ReactRender';
import render from './render/VueRender';

// Step1 初始化应用（可选
render({ loading: true });

const loader = (loading) => render({ loading });

// Step2 注册子应用
registerMicroApps(
  [
    {
      name: 'react',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react',
    },
    {
      name: 'vue',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue',
    },
    {
      name: 'angular',
      entry: '//localhost:7102',
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular',
    },
    {
      name: 'jquery',
      entry: '//localhost:7103',
      container: '#subapp-viewport',
      loader,
      activeRule: '/jquery',
    }
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        if (sessionStorage.getItem('Token')) {
          //  微应用加载检查登录 已登录 子应用直接传参登录
          
        }
      }
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

// Step3 设置默认进入的子应用
setDefaultMountApp('/vue');

// Step4 启动应用
start();

// runAfterFirstMounted(() => {
//   console.log('[MainApp] first app mounted');
// });
