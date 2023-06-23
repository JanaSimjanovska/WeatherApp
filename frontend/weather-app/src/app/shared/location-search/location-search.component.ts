import { Component, OnInit } from '@angular/core';
import * as GeoapifyModels from './geoapify-models';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
})
export class LocationSearchComponent implements OnInit {
  GeoapifyAPIKey = '8ccdef2e864d4121bf138dc288a2197a';
  biasByProximity: GeoapifyModels.ByProximityOptions;
  suggestionsFilter: any;

  constructor() {}

  ngOnInit(): void {}

  placeSelected(event: Event) {
    console.log('PLACE SELECTED', event);
  }

  suggestionsChanged(event: Event) {
    console.log('SUGGESTION CHANGED', event);
  }

  userInput(input: string) {
    console.log('USER INPUT', event);
  }
}
