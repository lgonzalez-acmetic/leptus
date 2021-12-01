import { Component, OnInit } from '@angular/core';
import { GrupoServicio } from 'src/app/models/grupoServicio.model';
import { PricesService } from './prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  GrupoServicio?: any;

  constructor(
    private service: PricesService,

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
