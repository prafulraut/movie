import { Component, OnInit } from '@angular/core';
import { ServiceMethodService } from 'src/app/servicesjson/services/service-method.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  vehicalDetail: any;
  // cp: number = 1;
  // searchTerm: any;
  searchData1:any

  constructor(public servicemethod: ServiceMethodService) {
    this.vehicalDetail = this.servicemethod.vehical
  
  }

  searchData() {
    this.searchData1 = this.vehicalDetail.filter(function (data: any) {
      return data.vehicalType == "Electric";
    });

}



ngOnInit(): void {

}

  

}
