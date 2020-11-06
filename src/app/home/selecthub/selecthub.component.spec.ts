import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthubComponent } from './selecthub.component';

describe('SelecthubComponent', () => {
  let component: SelecthubComponent;
  let fixture: ComponentFixture<SelecthubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecthubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
