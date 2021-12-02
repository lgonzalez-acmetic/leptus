import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoServicio } from 'src/app/models/grupoServicio.model';

const AUTH_API = 'https://serene-brook-26274.herokuapp.com/api/serviciosSoftware/';
// const AUTH_API = 'http://localhost:8000/api/serviciosSoftware/';
const CODE_API = 'iT3BnOENtV30pxRDadZ99e43wbDL4NA9';

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
