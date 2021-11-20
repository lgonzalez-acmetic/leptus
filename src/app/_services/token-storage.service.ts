import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const TOKEN_TYPE = 'auth-type';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {



  constructor() {  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string, token_type: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

    window.sessionStorage.removeItem(TOKEN_TYPE);
    window.sessionStorage.setItem(TOKEN_TYPE, token_type);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getUserLogged(): any {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

  estaAutenticado(): boolean{

    if ( this.getToken() == null ) {
      return false;
    }else{
      return true;
    }

    // const expira = Number(localStorage.getItem('expira'));
    // const expiraDate = new Date();
    // expiraDate.setTime(expira);

    // if ( expiraDate > new Date() ) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

}
