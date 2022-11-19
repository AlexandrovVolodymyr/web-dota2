import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentTreeComponent } from './talent-tree.component';

describe('TalentTreeComponent', () => {
  let component: TalentTreeComponent;
  let fixture: ComponentFixture<TalentTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentTreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TalentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
