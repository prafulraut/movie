import { Injectable } from '@angular/core';
import * as movieData from '../../../assets/json/movie.json';
@Injectable({
  providedIn: 'root'
})
export class ServiceMethodService {
  movies = (movieData as any).default;
  constructor() { }
  // wish(){
  //   console.log("hello");
  //   return "hello";
    
  // }
}
