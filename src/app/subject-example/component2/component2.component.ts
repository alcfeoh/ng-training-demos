import { Component } from '@angular/core';
import {Country} from '../../countries';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component  {

  currentCountry: Country;

  constructor(private countryService: CountryService) {
    countryService.getCurrentCountry().subscribe(c => this.currentCountry = c);
  }

}
