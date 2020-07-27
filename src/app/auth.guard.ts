import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private shared: ShareService;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.shared.getJwtToken() == null){
      if(localStorage.getItem('spotify_rest_token') == null){
        return false;
      }
      else{
        this.shared.setJwtToken(localStorage.getItem('spotify_rest_token'));
        return true;
      }
    }
    return true;
  }
  
}
