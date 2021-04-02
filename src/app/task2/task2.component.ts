import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numbers: any = [];
  serial: number = 1;
  add() {
    this.numbers.push({});
  }
  submit() {
    console.log(this.numbers);
  }
}
