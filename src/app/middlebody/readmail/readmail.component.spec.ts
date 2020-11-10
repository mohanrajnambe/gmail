import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmailComponent } from './readmail.component';

describe('ReadmailComponent', () => {
  let component: ReadmailComponent;
  let fixture: ComponentFixture<ReadmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
