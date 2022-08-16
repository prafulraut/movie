import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CinemaDataComponent } from './cinema-data/cinema-data.component';
import { NevigateCinemaComponent } from './nevigate-cinema/nevigate-cinema.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes : Routes=[
{ path: "", redirectTo: "moviesdata", pathMatch: "full" },
{ path: "", component: CinemaDataComponent },
{ path: "moviesdata/moviedash/:title", component: NevigateCinemaComponent },]

@NgModule({
  declarations: [CinemaDataComponent, NevigateCinemaComponent],
  imports: [RouterModule.forChild(routes), CommonModule,NgxPaginationModule,Ng2SearchPipeModule,FormsModule,],
  exports: [RouterModule],

})
export class CinemaDataModule { }
