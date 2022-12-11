import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsTreeComponent } from './talents-tree.component';

describe('TalentsTreeComponent', () => {
  let component: TalentsTreeComponent;
  let fixture: ComponentFixture<TalentsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentsTreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TalentsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
