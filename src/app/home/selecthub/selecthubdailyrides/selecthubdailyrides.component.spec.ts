import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthubdailyridesComponent } from './selecthubdailyrides.component';

describe('SelecthubdailyridesComponent', () => {
  let component: SelecthubdailyridesComponent;
  let fixture: ComponentFixture<SelecthubdailyridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecthubdailyridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthubdailyridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
