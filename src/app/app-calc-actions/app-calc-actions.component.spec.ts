import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalcActionsComponent } from './app-calc-actions.component';

describe('AppCalcActionsComponent', () => {
  let component: AppCalcActionsComponent;
  let fixture: ComponentFixture<AppCalcActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCalcActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCalcActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
