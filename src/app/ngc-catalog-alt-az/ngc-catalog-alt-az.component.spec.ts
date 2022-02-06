import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcCatalogAltAzComponent} from './ngc-catalog-alt-az.component';

describe('NgcCatalogExtendedComponent', () => {
  let component: NgcCatalogAltAzComponent;
  let fixture: ComponentFixture<NgcCatalogAltAzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcCatalogAltAzComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcCatalogAltAzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
