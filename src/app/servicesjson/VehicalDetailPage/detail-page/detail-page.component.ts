import { Component, OnInit } from '@angular/core';
import { ServiceMethodService } from './../../services/service-method.service';
import { AppConstantsLabel } from './../../constant/app-constants-label';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  vehicalDetail: any;
  productID: any;
  // data: any = AppConstantsLabel.movieDetail;
  constructor(private readonly servicemethodservice: ServiceMethodService, public activatedRoute: ActivatedRoute, private r: Router) {
    this.vehicalDetail = this.servicemethodservice.vehical
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      console.log(res.get('title'));
      this.productID = res.get('title');
    })

  }
  Back(){
    this.r.navigate(['/vehicalPage']);
    alert('hello')
  }  


}
