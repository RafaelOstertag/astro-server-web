import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcObjectSearchFormComponent} from './ngc-object-search-form.component';

describe('NgcObjectSearchFormComponent', () => {
  let component: NgcObjectSearchFormComponent;
  let fixture: ComponentFixture<NgcObjectSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcObjectSearchFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcObjectSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
