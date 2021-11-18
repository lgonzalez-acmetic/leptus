import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.authService.getUsers();
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    document.body.style.cursor = 'progress';
    console.log(this.form);

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        document.body.style.cursor = 'auto';

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        document.body.style.cursor = 'help';
      }
    );
  }

  reloadPage(): void {
    // window.location.reload();
  }

}
