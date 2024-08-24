import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [],
  templateUrl: './app-calc-view.component.html',
  styleUrl: './app-calc-view.component.css',
})
export class AppCalcViewComponent {
  num1: number = 0 / 0;
  num2: number = 0 / 0;
  @Input() resultado: number | null = null;

  onNum1Change(event: any) {
    this.num1 = event.target.value;
  }

  onNum2Change(event: any) {
    this.num2 = event.target.value;
  }

  @Output() asignarNum1 = new EventEmitter<number>();
  @Output() asignarNum2 = new EventEmitter<number>();

  eventoNums() {
    this.asignarNum1.emit(this.num1);
    this.asignarNum2.emit(this.num2);
  }
}
