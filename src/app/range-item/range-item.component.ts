import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-item',
  templateUrl: './range-item.component.html',
  styleUrls: ['./range-item.component.scss']
})
export class RangeItemComponent implements OnInit {
  @Input() name: string = "";
  @Input() type: string = "";
  @Input() min: number = 1;
  @Input() max: number = 30;

  @Output() rangeValue: EventEmitter<number> =  new EventEmitter<number>();


  step: number = 1;

  constructor() { }

  ngOnInit(): void {
    if (this.type === 'money') {
      this.min = 0;
      this.max = 999999;
      this.step = 1000;
    } else if(this.type === 'rate') {
      this.min = 0;
      this.max = 5;
      this.step = 0.25;
    }
  }

  rangeChange(value: string) : void {
    this.rangeValue.emit(parseInt(value));
  }
}
