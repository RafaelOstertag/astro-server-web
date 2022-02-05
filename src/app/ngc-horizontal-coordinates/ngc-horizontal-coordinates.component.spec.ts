import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcHorizontalCoordinatesComponent} from './ngc-horizontal-coordinates.component';

describe('NgcHorizontalCoordinatesComponent', () => {
  let component: NgcHorizontalCoordinatesComponent;
  let fixture: ComponentFixture<NgcHorizontalCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcHorizontalCoordinatesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcHorizontalCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
