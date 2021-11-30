import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://serene-brook-26274.herokuapp.com/api/serviciosSoftware/';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private http: HttpClient) {}

  getGruposServicios() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
      this.http.get(AUTH_API + "lista").subscribe(data => {
        console.log(data);
      });

  }


}
