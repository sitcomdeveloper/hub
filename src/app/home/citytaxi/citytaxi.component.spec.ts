import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitytaxiComponent } from './citytaxi.component';

describe('CitytaxiComponent', () => {
  let component: CitytaxiComponent;
  let fixture: ComponentFixture<CitytaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitytaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitytaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
