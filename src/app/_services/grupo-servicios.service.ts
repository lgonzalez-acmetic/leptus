import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://serene-brook-26274.herokuapp.com/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class GrupoServiciosService {

  constructor() { }
}
