import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  usuario = {
    email: '',
    password: ''
  }

  login(){
    console.log(this.usuario);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
