import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CognitoService } from './cognito.service';
//import { CognitoService } from cognito.service;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: CognitoService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAuthenticated = this.authService.isAuthenticated();
    console.log("isAuthenticated " + isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate([' / signIn']);
    }
    return isAuthenticated;
  }
  
}
