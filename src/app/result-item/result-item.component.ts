import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() label: string = "";
  @Input() value: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
