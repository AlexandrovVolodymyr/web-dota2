import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilityComponent } from './hero-ability.component';

describe('HeroAbilityComponent', () => {
  let component: HeroAbilityComponent;
  let fixture: ComponentFixture<HeroAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroAbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
