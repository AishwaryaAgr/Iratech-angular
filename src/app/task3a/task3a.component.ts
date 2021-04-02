import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task3a',
  templateUrl: './task3a.component.html',
  styleUrls: ['./task3a.component.css'],
})
export class Task3aComponent implements OnInit {
  @Input() element: string;
  constructor() {}

  ngOnInit(): void {}
}
