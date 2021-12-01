import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { LandingPageService } from './landing-page.service';
import { GrupoServicio } from '../../models/grupoServicio.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  GrupoServicio?: any;

  constructor(private token:TokenStorageService,
    private service: LandingPageService,

    ) { }

  ngOnInit(): void {
    this.getServicesList();
  }

  getServicesList(): void {
    // this.service.getAll().subscribe(res=>this.GrupoServicio=res);
    this.service.getAll()
      .subscribe(
        data => {
          this.GrupoServicio =  data;
          // console.log(this.GrupoServicio);
        },
        error => {
          console.log(error);
        });
  }
}
