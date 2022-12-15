import { Injectable } from '@angular/core';
import * as vehicalData from '../../../assets/json/vehical.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceMethodService {
  vehical = (vehicalData as any).default;
  constructor() { }
}
