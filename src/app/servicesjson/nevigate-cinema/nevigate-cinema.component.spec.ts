import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevigateCinemaComponent } from './nevigate-cinema.component';

describe('NevigateCinemaComponent', () => {
  let component: NevigateCinemaComponent;
  let fixture: ComponentFixture<NevigateCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevigateCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NevigateCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
