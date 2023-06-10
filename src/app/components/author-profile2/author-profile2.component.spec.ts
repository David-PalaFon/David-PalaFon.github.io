import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthorProfile2Component } from './author-profile2.component';

describe('AuthorProfileComponent', () => {
  let component: AuthorProfile2Component;
  let fixture: ComponentFixture<AuthorProfile2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorProfile2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
