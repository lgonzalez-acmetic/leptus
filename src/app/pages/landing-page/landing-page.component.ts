import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private token:TokenStorageService,
    private router: Router,
    private service: LandingPageService,

    ) { }

  ngOnInit(): void {
    this.getServicesList();
  }

  getServicesList(){
    this.service.getGruposServicios();
  }
}
