import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routerchild1Component } from './routerchild1.component';

describe('Routerchild1Component', () => {
  let component: Routerchild1Component;
  let fixture: ComponentFixture<Routerchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routerchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routerchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
