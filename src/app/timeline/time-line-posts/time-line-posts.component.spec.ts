import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLinePostsComponent } from './time-line-posts.component';

describe('TimeLinePostsComponent', () => {
  let component: TimeLinePostsComponent;
  let fixture: ComponentFixture<TimeLinePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLinePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLinePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
