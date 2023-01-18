import './qiankun/public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import actions from './qiankun/qiankun-actions';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render(props = {}) {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log('独立运行--angular');
  render();
}

export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: Object) {
  actions.setActions(props);
  render(props);
}

export async function unmount(props: Object) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
