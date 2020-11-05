import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesoutstationComponent } from './featuresoutstation.component';

describe('FeaturesoutstationComponent', () => {
  let component: FeaturesoutstationComponent;
  let fixture: ComponentFixture<FeaturesoutstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesoutstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesoutstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
