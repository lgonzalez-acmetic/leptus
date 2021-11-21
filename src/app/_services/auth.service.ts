import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://serene-brook-26274.herokuapp.com/api/usuarios/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  login2(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name,
      email,
      password
    }, httpOptions);
  }

  // ----------

  getUsers() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
    this.http.get(AUTH_API + "lista").subscribe(data => {
      console.log(data);
    });
  }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }

}
