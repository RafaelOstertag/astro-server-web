import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcEntryComponent} from './ngc-entry.component';

describe('NgcEntryComponent', () => {
  let component: NgcEntryComponent;
  let fixture: ComponentFixture<NgcEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcEntryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
