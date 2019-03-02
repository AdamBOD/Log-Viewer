import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service'

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html'
})
export class LogViewComponent implements OnInit {
  logs;
  logsLoaded = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLogs ();
  }

  getLogs () {
    this.dataService.getData()
      .subscribe (res => {
        this.logsLoaded = true;
        this.logs = res;
      }, err => {
        console.log (err);
      });
  }

}
