import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcFilterSettingsComponent} from './ngc-filter-settings.component';

describe('NgcFilterSettingsComponent', () => {
  let component: NgcFilterSettingsComponent;
  let fixture: ComponentFixture<NgcFilterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcFilterSettingsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcFilterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
