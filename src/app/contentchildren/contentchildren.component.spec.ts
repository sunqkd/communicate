import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildrenComponent } from './contentchildren.component';

describe('ContentchildrenComponent', () => {
  let component: ContentchildrenComponent;
  let fixture: ComponentFixture<ContentchildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
