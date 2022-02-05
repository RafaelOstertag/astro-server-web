import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcLocationComponent} from './ngc-location.component';

describe('NgcLocationComponent', () => {
  let component: NgcLocationComponent;
  let fixture: ComponentFixture<NgcLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcLocationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
