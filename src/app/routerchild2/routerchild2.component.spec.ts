import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routerchild2Component } from './routerchild2.component';

describe('Routerchild2Component', () => {
  let component: Routerchild2Component;
  let fixture: ComponentFixture<Routerchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routerchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routerchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
