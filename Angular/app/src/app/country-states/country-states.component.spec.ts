import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatesComponent } from './country-states.component';

describe('CountryStatesComponent', () => {
  let component: CountryStatesComponent;
  let fixture: ComponentFixture<CountryStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
