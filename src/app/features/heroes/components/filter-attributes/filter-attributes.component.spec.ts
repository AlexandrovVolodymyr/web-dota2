import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAttributesComponent } from './filter-attributes.component';

describe('FilterAttributesComponent', () => {
  let component: FilterAttributesComponent;
  let fixture: ComponentFixture<FilterAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterAttributesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
