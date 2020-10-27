import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookthehubComponent } from './bookthehub.component';

describe('BookthehubComponent', () => {
  let component: BookthehubComponent;
  let fixture: ComponentFixture<BookthehubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookthehubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookthehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
