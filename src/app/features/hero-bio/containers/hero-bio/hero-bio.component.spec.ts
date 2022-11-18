import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBioComponent } from './hero-bio.component';

describe('HeroBioComponent', () => {
  let component: HeroBioComponent;
  let fixture: ComponentFixture<HeroBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
