import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSlideNavComponent } from './right-slide-nav.component';

describe('RightSlideNavComponent', () => {
  let component: RightSlideNavComponent;
  let fixture: ComponentFixture<RightSlideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSlideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSlideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
