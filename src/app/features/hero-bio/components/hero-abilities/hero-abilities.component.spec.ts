import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilitiesComponent } from './hero-abilities.component';

describe('HeroAbilitiesComponent', () => {
  let component: HeroAbilitiesComponent;
  let fixture: ComponentFixture<HeroAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAbilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
