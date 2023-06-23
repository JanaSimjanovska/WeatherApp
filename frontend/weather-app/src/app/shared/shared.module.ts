import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';

@NgModule({
  declarations: [LoadingSpinnerComponent, LocationSearchComponent],
  imports: [
    CommonModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(
      '8ccdef2e864d4121bf138dc288a2197a'
    ),
  ],
  exports: [LoadingSpinnerComponent, LocationSearchComponent],
  entryComponents: [],
})
export class SharedModule {}
