import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service'; 
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url
    return this.checkLogin(url);
  }
  
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // 保存原始的请求地址,登录后跳转到该地址
    this.authService.redirectUrl = url;

    // 未登录,跳转到登录页面
    this.router.navigate(['/login']);
    return false;
  }
}