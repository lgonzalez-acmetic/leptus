import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiciosSoftware } from 'src/app/models/serviciosSoftware.model';
import { AppSettings } from 'src/app/config/constants';
import { Observable } from 'rxjs';

const AUTH_API = AppSettings.API_ENDPOINT + '/serviciosSoftware/';
const CODE_API = AppSettings.CODE_API;

@Injectable({
  providedIn: 'root',
})
export class HomePageService {

  constructor(private http: HttpClient) {}

  getServiciosSoftware(): Observable<ServiciosSoftware[]> {
		return this.http.get<ServiciosSoftware[]>(AUTH_API + "Servicioslista/" + CODE_API);
	}


}
