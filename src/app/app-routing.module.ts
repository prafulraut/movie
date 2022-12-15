import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './servicesjson/HomePage/home-page/home-page.component';
import { DetailPageComponent } from './servicesjson/VehicalDetailPage/detail-page/detail-page.component';

 
  const routes : Routes=[
    { path: "", redirectTo: "vehicalPage", pathMatch: "full" },
    { path: "", component: HomePageComponent },
    { path: "vehicalPage/vehicalDetail/:title", component: DetailPageComponent },]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
