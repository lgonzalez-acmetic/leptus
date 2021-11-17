import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

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
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.add("prueba");
  }

  login(){
    console.log(this.usuario);

  }
}
