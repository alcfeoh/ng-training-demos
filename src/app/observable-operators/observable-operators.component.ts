import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tap, withLatestFrom} from 'rxjs/operators';
import {Country, countryList$} from '../countries';
import {combineLatest} from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./observable-operators.component.css']
})
export class ObservableOperatorsComponent {

  continentSelect = new FormControl<string>('');
  countrySelect = new FormControl<string>('');
  currentSelection?: string;
  displayedCountries: Country[] = [];

  constructor() {
    this.continentSelect.valueChanges.pipe(
      tap(continent => console.log(continent)),
      withLatestFrom(countryList$)
    ).subscribe(([continent, countries]) => {
      this.displayedCountries = countries.filter(country => country.continent === continent);
    });

    combineLatest([this.continentSelect.valueChanges, this.countrySelect.valueChanges])
      .subscribe(([continent, country]) => this.currentSelection = continent + ' - ' + country);
  }
}
