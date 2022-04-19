import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Country} from '../countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country$ = new Subject<Country>();

  setCurrentCountry(country: Country): void {
    this.country$.next(country);
  }

  getCurrentCountry(): Observable<Country> {
    return this.country$.asObservable();
  }
}
