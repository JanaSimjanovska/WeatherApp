import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LocationSearchComponent } from './location-search/location-search.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, LocationSearchComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent],
  entryComponents: [],
})
export class SharedModule {}
