import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeStoreComponent } from './shoe-store.component';

describe('ShoeStoreComponent', () => {
  let component: ShoeStoreComponent;
  let fixture: ComponentFixture<ShoeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
