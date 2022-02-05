import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcEntryTitleComponent} from './ngc-entry-title.component';

describe('NgcEntryTitleComponent', () => {
  let component: NgcEntryTitleComponent;
  let fixture: ComponentFixture<NgcEntryTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcEntryTitleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcEntryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
