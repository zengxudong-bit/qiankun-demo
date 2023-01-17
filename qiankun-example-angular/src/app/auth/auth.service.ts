import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = sessionStorage.getItem('Token') ? true : false; //默认未登录

  // 记录登录之后,需要跳转到原来请求的地址
  'redirectUrl': string;
// 登录
  login(): void {
    // console.log('进行登录操作');
    this.isLoggedIn = true
    // return of(true).pipe(
    //   // delay(1000),
    //   tap(val => this.isLoggedIn = true)
    // );
  }
// 登出
  logout(): void {
    this.isLoggedIn = false;
  }
}