import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewchildComponent } from './afterviewchild.component';

describe('AfterviewchildComponent', () => {
  let component: AfterviewchildComponent;
  let fixture: ComponentFixture<AfterviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
