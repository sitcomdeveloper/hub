import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturescitytaxiComponent } from './featurescitytaxi.component';

describe('FeaturescitytaxiComponent', () => {
  let component: FeaturescitytaxiComponent;
  let fixture: ComponentFixture<FeaturescitytaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturescitytaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturescitytaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
