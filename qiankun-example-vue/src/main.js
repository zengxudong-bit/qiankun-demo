import './qiankun/public-path';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';
import App from './App.vue'

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/');
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router).mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行时');
  render();
}

export async function bootstrap() {
  console.log('进入微应用--vue的项目');
}

export async function mount(props) {
  console.log('加载完成微应用--vue的项目', props);
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}