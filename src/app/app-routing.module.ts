import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'moviesdata',
    loadChildren: () =>
      import('./servicesjson/cinema-data.module').then((m) =>
        m.CinemaDataModule),
  },
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
