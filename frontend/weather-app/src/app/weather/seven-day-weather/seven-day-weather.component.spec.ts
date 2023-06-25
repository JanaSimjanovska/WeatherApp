import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDayWeatherComponent } from './seven-day-weather.component';

describe('SevenDayWeatherComponent', () => {
  let component: SevenDayWeatherComponent;
  let fixture: ComponentFixture<SevenDayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDayWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
