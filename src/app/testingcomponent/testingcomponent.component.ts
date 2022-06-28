import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testingcomponent',
  templateUrl: './testingcomponent.component.html',
  styleUrls: ['./testingcomponent.component.css'],
})
export class TestingcomponentComponent implements OnInit {
  Username: string = 'Dineshkumar';
  constructor() {}

  ngOnInit(): void {}
  needusername() {
    return this.Username;
  }
}
