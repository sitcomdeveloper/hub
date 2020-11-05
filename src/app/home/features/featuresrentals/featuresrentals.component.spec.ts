import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesrentalsComponent } from './featuresrentals.component';

describe('FeaturesrentalsComponent', () => {
  let component: FeaturesrentalsComponent;
  let fixture: ComponentFixture<FeaturesrentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesrentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
