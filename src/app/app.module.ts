import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VehicalModule } from './servicesjson/vehical.module';
import { HomePageComponent } from './servicesjson/HomePage/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
    // VehicalModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
