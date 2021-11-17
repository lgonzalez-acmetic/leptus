import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }

  getUsers() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
    this.http.get("http://localhost:8000/api/usuarios/lista").subscribe(data => {
      console.log(data);
    });
  }

}
