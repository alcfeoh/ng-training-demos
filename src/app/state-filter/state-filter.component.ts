import { Component } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

interface State {
  abbreviation: string;
  name: string;
}

@Component({
    selector: 'app-state-filter',
    templateUrl: './state-filter.component.html',
    imports: [
    ReactiveFormsModule,
    AsyncPipe
],
    styleUrls: ['./state-filter.component.css']
})
export class StateFilterComponent {

  states$: Observable<State[]>;
  filteredStates$: Observable<State[]>;
  filter: UntypedFormControl;
  filter$: Observable<string>;

  constructor(private http: HttpClient) {
    this.states$ = http.get<State[]>('http://localhost:8000/states');
    this.filter = new UntypedFormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredStates$ = combineLatest(this.states$, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.name.indexOf(filterString) !== -1))
    );
  }

}
