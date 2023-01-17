import './qiankun/public-path'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './qiankun/serviceWorker';

function render(props = {}) {
  const { container } = props;
  createRoot(container ? container.querySelector('#root') : document.querySelector('#root')).render(<App/>);
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行--react');
  render();
}

export async function bootstrap() {
  console.log('进入微应用--react的项目');
}

export async function mount(props) {
  console.log('加载完成微应用--react的项目', props);
  // storeTest(props);
  render(props);
}

export async function unmount(props) {
  console.log('卸载微应用--react的项目');
  const { container } = props;
  createRoot(container).unmount(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// reportWebVitals();
serviceWorker.unregister();