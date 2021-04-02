import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {
  id: any = 0;
  ans: any;
  constructor() {}

  click() {
    let num = Number(this.id);
    this.ans = Number((num + 1) * (num + 1));
    if (num % 2 === 0) {
      this.ans++;
    } else {
      this.ans--;
    }
  }

  ngOnInit(): void {}
}
