import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalcViewComponent } from './app-calc-view.component';

describe('AppCalcViewComponent', () => {
  let component: AppCalcViewComponent;
  let fixture: ComponentFixture<AppCalcViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCalcViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCalcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
