import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFiltersComponent } from './heroes-filters.component';

describe('HeroesFiltersComponent', () => {
  let component: HeroesFiltersComponent;
  let fixture: ComponentFixture<HeroesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesFiltersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
