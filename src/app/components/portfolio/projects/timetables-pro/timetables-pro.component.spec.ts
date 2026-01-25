import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablesProComponent } from './timetables-pro.component';

describe('TimetablesProComponent', () => {
  let component: TimetablesProComponent;
  let fixture: ComponentFixture<TimetablesProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetablesProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetablesProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
