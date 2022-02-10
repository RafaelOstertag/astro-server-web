import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcObjectSearchComponent} from './ngc-object-search.component';

describe('NgcObjectSearchComponent', () => {
  let component: NgcObjectSearchComponent;
  let fixture: ComponentFixture<NgcObjectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcObjectSearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcObjectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
