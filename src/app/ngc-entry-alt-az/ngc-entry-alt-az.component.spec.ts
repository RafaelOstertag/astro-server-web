import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcEntryAltAzComponent} from './ngc-entry-alt-az.component';

describe('NgcEntryAltAzComponent', () => {
  let component: NgcEntryAltAzComponent;
  let fixture: ComponentFixture<NgcEntryAltAzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcEntryAltAzComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcEntryAltAzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
