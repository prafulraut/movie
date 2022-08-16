import { Component, OnInit } from '@angular/core';
import { ServiceMethodService } from 'src/app/servicesjson/services/service-method.service';

@Component({
  selector: 'app-cinema-data',
  templateUrl: './cinema-data.component.html',
  styleUrls: ['./cinema-data.component.css']
})
export class CinemaDataComponent implements OnInit {
  mov: any;
  cp: number = 1;
  searchTerm: any;
  constructor(private readonly servicemethodservice: ServiceMethodService) {
    this.mov = this.servicemethodservice.movies
  }
  
  ngOnInit(): void {
  }

}


