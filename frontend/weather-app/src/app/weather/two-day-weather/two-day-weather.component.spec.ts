import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDayWeatherComponent } from './two-day-weather.component';

describe('TwoDayWeatherComponent', () => {
  let component: TwoDayWeatherComponent;
  let fixture: ComponentFixture<TwoDayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDayWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
