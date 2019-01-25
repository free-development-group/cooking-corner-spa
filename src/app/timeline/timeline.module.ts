import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { TimeLinePostsComponent } from './time-line-posts/time-line-posts.component';

@NgModule({
  declarations: [CreatePostComponent, ListPostsComponent, TimeLinePostsComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ],
  exports: [
    CreatePostComponent, ListPostsComponent,
    TimeLinePostsComponent
  ]
})
export class TimelineModule { }
