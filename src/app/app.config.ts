import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideSignalFormsConfig} from "@angular/forms/signals";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideSignalFormsConfig({
      classes: {
        "ng-invalid": field => field.state().invalid(),
        "ng-valid": field => field.state().valid() && field.state().required(),
        "ng-dirty": field => field.state().dirty()
      }
    })
  ]
};
