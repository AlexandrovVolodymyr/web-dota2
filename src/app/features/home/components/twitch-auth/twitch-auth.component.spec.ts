import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchAuthComponent } from './twitch-auth.component';

describe('TwitchAuthComponent', () => {
  let component: TwitchAuthComponent;
  let fixture: ComponentFixture<TwitchAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitchAuthComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TwitchAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
