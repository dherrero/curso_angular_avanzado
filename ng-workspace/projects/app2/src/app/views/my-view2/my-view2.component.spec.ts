import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyView2Component } from './my-view2.component';

describe('MyView2Component', () => {
  let component: MyView2Component;
  let fixture: ComponentFixture<MyView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
