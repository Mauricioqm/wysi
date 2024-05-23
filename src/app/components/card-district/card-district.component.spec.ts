import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDistrictComponent } from './card-district.component';

describe('CardDistrictComponent', () => {
  let component: CardDistrictComponent;
  let fixture: ComponentFixture<CardDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
