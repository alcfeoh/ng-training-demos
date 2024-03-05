import { Component } from '@angular/core';
import {CountryService} from '../country.service';
import {Country, countryList$} from '../../countries';
import {map} from 'rxjs/operators';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  countries: Country[] = [];

  constructor(public countryService: CountryService) {
    countryList$.pipe(
      map(countries => countries.filter(c => c.name.startsWith('D')))
    ).subscribe(countries => this.countries = countries);
  }

}
