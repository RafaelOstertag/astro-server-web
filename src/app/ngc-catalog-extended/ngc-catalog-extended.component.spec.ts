import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcCatalogExtendedComponent} from './ngc-catalog-extended.component';

describe('NgcCatalogExtendedComponent', () => {
  let component: NgcCatalogExtendedComponent;
  let fixture: ComponentFixture<NgcCatalogExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcCatalogExtendedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcCatalogExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
