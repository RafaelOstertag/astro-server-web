import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcEntryExtendedComponent} from './ngc-entry-extended.component';

describe('NgcEntryExtendedComponent', () => {
  let component: NgcEntryExtendedComponent;
  let fixture: ComponentFixture<NgcEntryExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcEntryExtendedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcEntryExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
