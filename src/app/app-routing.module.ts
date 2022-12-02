import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaDataComponent } from './servicesjson/cinema-data/cinema-data.component';
import { NevigateCinemaComponent } from './servicesjson/nevigate-cinema/nevigate-cinema.component';


const routes: Routes = [
  // {
  //   path: 'moviesdata',
  //   loadChildren: () =>
  //     import('./servicesjson/cinema-data.module').then((m) =>
  //       m.CinemaDataModule),
  // },
  { path: "", redirectTo: "moviesdata", pathMatch: "full" },
  { path: "", component: CinemaDataComponent },
  { path: "moviesdata/moviedash/:title", component: NevigateCinemaComponent },]

  
  
  

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
