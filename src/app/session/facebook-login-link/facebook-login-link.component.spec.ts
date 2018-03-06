import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLoginLinkComponent } from './facebook-login-link.component';

describe('FacebookLoginLinkComponent', () => {
  let component: FacebookLoginLinkComponent;
  let fixture: ComponentFixture<FacebookLoginLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLoginLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLoginLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
