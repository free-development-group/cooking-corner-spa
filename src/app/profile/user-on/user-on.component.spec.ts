import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnComponent } from './user-on.component';

describe('UserOnComponent', () => {
  let component: UserOnComponent;
  let fixture: ComponentFixture<UserOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
