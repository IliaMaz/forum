import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewThreadComponent } from './forum-new-thread.component';

describe('ForumNewThreadComponent', () => {
  let component: ForumNewThreadComponent;
  let fixture: ComponentFixture<ForumNewThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumNewThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNewThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
