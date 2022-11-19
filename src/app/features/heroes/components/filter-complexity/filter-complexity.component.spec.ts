import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComplexityComponent } from './filter-complexity.component';

describe('FilterComplexityComponent', () => {
  let component: FilterComplexityComponent;
  let fixture: ComponentFixture<FilterComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComplexityComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
