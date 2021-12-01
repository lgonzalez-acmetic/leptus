import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private tokenService: TokenStorageService,
      private router: Router){
  }
  canActivate():  boolean  {
    console.log(this.tokenService.estaAutenticado());

    if(this.tokenService.estaAutenticado()){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
