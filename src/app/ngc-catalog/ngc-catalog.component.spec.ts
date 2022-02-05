import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgcCatalogComponent} from './ngc-catalog.component';

describe('NgcCatalogComponent', () => {
  let component: NgcCatalogComponent;
  let fixture: ComponentFixture<NgcCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgcCatalogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
