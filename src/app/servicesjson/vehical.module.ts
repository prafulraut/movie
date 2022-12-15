import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { DetailPageComponent } from './VehicalDetailPage/detail-page/detail-page.component';

// const routes : Routes=[
//   { path: "", redirectTo: "vehicaldata", pathMatch: "full" },
//   { path: "", component: HomePageComponent },
//   { path: "vehical/vehicalDetail/:title", component: DetailPageComponent },]


@NgModule({
  declarations: [ DetailPageComponent],
  imports: [ CommonModule,NgxPaginationModule,Ng2SearchPipeModule,FormsModule,ReactiveFormsModule],
  exports: [RouterModule],

})
export class VehicalModule { }
