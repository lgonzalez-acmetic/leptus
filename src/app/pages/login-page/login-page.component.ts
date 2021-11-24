import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getUsers();
    if (this.tokenStorage.getToken()) {
      // this.isLoggedIn = true;
        this.router.navigateByUrl('/home');
        // this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    document.body.style.cursor = 'progress';
    Swal.fire({
      title: 'Por favor Espere !',
      html: 'Cargando ...',// add html attribute if you want or remove
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
          Swal.showLoading()
      },
    });

    console.log(this.form);

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token, data.token_type);
        this.tokenStorage.saveUser(data.user);
        Swal.close();
        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        document.body.style.cursor = 'auto';
        this.router.navigateByUrl('/home');
      },
      err => {
        this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        document.body.style.cursor = 'help';
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error!',// add html attribute if you want or remove
          allowOutsideClick: true,
        });
      }
    );
  }

  reloadPage(): void {
    // window.location.reload();
  }

}
