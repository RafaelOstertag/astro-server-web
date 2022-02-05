import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcEntryDetailComponent} from './ngc-entry-detail.component';

describe('NgcEntryDetailComponent', () => {
  let component: NgcEntryDetailComponent;
  let fixture: ComponentFixture<NgcEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcEntryDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
