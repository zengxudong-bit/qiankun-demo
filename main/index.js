import 'zone.js'; // for angular subapp
import { initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/ReactRender';
import render from './render/VueRender';

// Step1 初始化应用（可选
render({ loading: true });

const state = {
  globalToken: ''
};
const { onGlobalStateChange, setGlobalState } = initGlobalState(state);

onGlobalStateChange((value, prev) => console.log('[主基站进行的数据监听行为]:', value, prev));

setGlobalState({
  globalToken: '主基站赋值操作'
});

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
      props: {
        say: 'Hello React，我是基站给你传的数据'
      }
    },
    {
      name: 'vue',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue',
      props: {
        say: 'Hello Vue，我是基站给你传的数据'
      }
    },
    {
      name: 'angular',
      entry: '//localhost:7102',
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular',
      props: {
        say: 'Hello Angular，我是基站给你传的数据'
      }
    },
    {
      name: 'jquery',
      entry: '//localhost:7103',
      container: '#subapp-viewport',
      loader,
      activeRule: '/jquery',
      props: {
        say: 'Hello Jquery，我是基站给你传的数据'
      }
    }
  ],
  {
    beforeLoad: [
      (app) => {
        console.log(app.name,'beforeLoad');
      }
    ],
    beforeMount: [
      (app) => {
        console.log(app,'beforeMount');
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

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
