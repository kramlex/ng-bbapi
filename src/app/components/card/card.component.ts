import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() img: string;
  @Input() nickname: string;
  @Input() birthday: string;
  @Input() status: string;

  constructor() { }
  ngOnInit(): void {}
}
