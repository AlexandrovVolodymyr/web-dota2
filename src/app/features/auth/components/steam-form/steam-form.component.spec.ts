import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamFormComponent } from './steam-form.component';

describe('SteamFormComponent', () => {
  let component: SteamFormComponent;
  let fixture: ComponentFixture<SteamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
