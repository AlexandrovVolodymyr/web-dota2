import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchStreamsComponent } from './twitch-streams.component';

describe('TwitchStreamsComponent', () => {
  let component: TwitchStreamsComponent;
  let fixture: ComponentFixture<TwitchStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
