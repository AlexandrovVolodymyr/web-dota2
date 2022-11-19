import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchUserComponent } from './twitch-user.component';

describe('TwitchUserComponent', () => {
  let component: TwitchUserComponent;
  let fixture: ComponentFixture<TwitchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitchUserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TwitchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
