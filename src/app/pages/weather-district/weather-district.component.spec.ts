import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDistrictComponent } from './weather-district.component';

describe('WeatherDistrictComponent', () => {
  let component: WeatherDistrictComponent;
  let fixture: ComponentFixture<WeatherDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
