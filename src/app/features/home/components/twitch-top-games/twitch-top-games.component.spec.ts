import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchTopGamesComponent } from './twitch-top-games.component';

describe('TwitchTopGamesComponent', () => {
  let component: TwitchTopGamesComponent;
  let fixture: ComponentFixture<TwitchTopGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchTopGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchTopGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
