import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, email, password } = this.form;
    document.body.style.cursor = 'progress';
    console.log(this.form);

    this.authService.register(name, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        document.body.style.cursor = 'auto';

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        document.body.style.cursor = 'help';
      }
    );
  }

}
