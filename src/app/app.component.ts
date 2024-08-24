import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCalcViewComponent } from './app-calc-view/app-calc-view.component';
import { AppCalcActionsComponent } from './app-calc-actions/app-calc-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCalcViewComponent, AppCalcActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-calc';
  numero1: number = 0 / 0;
  numero2: number = 0 / 0;
  resultado: number | null = null;

  actualizarNum1(num1: number) {
    this.numero1 = num1;
  }

  actualizarNum2(num2: number) {
    this.numero2 = num2;
  }

  valorResultado(res: number | null) {
    this.resultado = res;
  }
}
