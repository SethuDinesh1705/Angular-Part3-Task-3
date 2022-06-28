import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestcomponentService {
  messages: string[] = [];
  userlog(information: string) {
    this.messages.push(information);
  }
  clear() {
    this.messages = [];
  }
  constructor() {}
}
