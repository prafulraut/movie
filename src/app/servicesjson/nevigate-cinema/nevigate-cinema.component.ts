import { Component, OnInit } from '@angular/core';
import { ServiceMethodService } from 'src/app/servicesjson/services/service-method.service';
import { AppConstantsLabel } from '../../servicesjson/constant/app-constants-label';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nevigate-cinema',
  templateUrl: './nevigate-cinema.component.html',
  styleUrls: ['./nevigate-cinema.component.css']
})
export class NevigateCinemaComponent implements OnInit {
  mov: any;
  productID: any;
  data: any = AppConstantsLabel.movieDetail;
  constructor(private readonly servicemethodservice: ServiceMethodService, public activatedRoute: ActivatedRoute, private r: Router) {
    this.mov = this.servicemethodservice.movies
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      console.log(res.get('title'));
      this.productID = res.get('title');
    })

  }
  Back(){
    //   this.router.nevigate("/..")
    this.r.navigate(['/moviesdata']);
  }  

}
