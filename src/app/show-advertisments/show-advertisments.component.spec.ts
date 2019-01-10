import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdvertismentsComponent } from './show-advertisments.component';

describe('ShowAdvertismentsComponent', () => {
  let component: ShowAdvertismentsComponent;
  let fixture: ComponentFixture<ShowAdvertismentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAdvertismentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdvertismentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
