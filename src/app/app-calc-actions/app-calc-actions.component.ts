import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './app-calc-actions.component.html',
  styleUrl: './app-calc-actions.component.css',
})
export class AppCalcActionsComponent {
  @Input() num1: number = 0 / 0;
  @Input() num2: number = 0 / 0;
  resultado: number | null = null;

  operar(operacion: string) {
    switch (operacion) {
      case 'suma':
        this.resultado = +this.num1 + +this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'potencia':
        this.resultado = this.num1 ** this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        this.resultado = this.num1 / this.num2;
        break;
      case 'reset':
        this.resetearValores();
        break;
    }
    console.log(this.resultado);
    this.eventValorResultado(this.resultado);
  }

  @Output() actualizarResultado = new EventEmitter<number | null>();

  eventValorResultado(res: number | null) {
    this.actualizarResultado.emit(res);
  }

  resetearValores() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = null;
  }
}
