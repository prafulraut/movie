import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDataComponent } from './cinema-data.component';

describe('CinemaDataComponent', () => {
  let component: CinemaDataComponent;
  let fixture: ComponentFixture<CinemaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
