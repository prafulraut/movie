import { Component, OnInit } from '@angular/core';
import { ServiceMethodService } from 'src/app/servicesjson/services/service-method.service';

@Component({
  selector: 'app-cinema-data',
  templateUrl: './cinema-data.component.html',
  styleUrls: ['./cinema-data.component.css']
})
export class CinemaDataComponent implements OnInit {
  mov: any;
  condition: boolean = true;
  cp: number = 1;
  title = 'angular-pdf-viewer'
  searchTerm: any;
  constructor(private readonly servicemethodservice: ServiceMethodService) {
    this.mov = this.servicemethodservice.movies
  }
  showmore() {
    this.mov = this.servicemethodservice.movies
    this.condition = false
  }
  trackByfn(index: any, item: any) {
    return item.movies;
  }

  ngOnInit(): void {
  }

}


