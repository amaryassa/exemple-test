import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProductComponent } from './maintenance-product.component';

describe('MaintenanceProductComponent', () => {
  let component: MaintenanceProductComponent;
  let fixture: ComponentFixture<MaintenanceProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
