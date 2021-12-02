import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoServicio } from 'src/app/models/grupoServicio.model';
import { AppSettings } from 'src/app/config/constants';

const AUTH_API = AppSettings.API_ENDPOINT + '/serviciosSoftware/';
const CODE_API = AppSettings.CODE_API;

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(private http: HttpClient) {}

  getGruposServicios() {
      this.http.get(AUTH_API + "lista").subscribe(
        data => {
        return data;
      },
      error => {
        console.log(error);
      });
  }

  getAll(): Observable<GrupoServicio[]> {
		return this.http.get<GrupoServicio[]>(AUTH_API + "lista/" + CODE_API);
	}

}
