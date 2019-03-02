import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html'
})
export class LogViewComponent implements OnInit {
  logs = [{"_id":"5c7ae44bca9a7100049941a8","message":"Querying Watch","time":"2019-03-02T20:15:07.236Z","__v":0},{"_id":"5c7ae44bca9a7100049941a9","message":"Received data: 82","time":"2019-03-02T20:15:07.462Z","__v":0},{"_id":"5c7ae44bca9a7100049941aa","message":"Received data: 82","time":"2019-03-02T20:15:07.586Z","__v":0},{"_id":"5c7ae44bca9a7100049941ac","message":"Received data: 82","time":"2019-03-02T20:15:07.669Z","__v":0},{"_id":"5c7ae44bca9a7100049941ab","message":"Received data: 82","time":"2019-03-02T20:15:07.599Z","__v":0},{"_id":"5c7ae44bca9a7100049941ad","message":"Received data: 82","time":"2019-03-02T20:15:07.731Z","__v":0},{"_id":"5c7ae44bca9a7100049941ae","message":"Received data: 82","time":"2019-03-02T20:15:07.880Z","__v":0},{"_id":"5c7ae44cca9a7100049941af","message":"Failed to send data","time":"2019-03-02T20:15:08.605Z","__v":0}];
  constructor() { }

  ngOnInit() {
  }

}
