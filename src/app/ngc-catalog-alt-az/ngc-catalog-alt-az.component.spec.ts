import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcCatalogAltAzComponent} from './ngc-catalog-alt-az.component';

describe('NgcCatalogAltAzComponent', () => {
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
