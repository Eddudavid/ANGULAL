import { Component } from '@angular/core';
//import {setServers} from 'dns';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls:   ['./server.component.css'],
  /*styles: [`
    h3{
      color: mediumblue;
    }
  `]*/

  })

export class ServerComponent {
  ServerId = 10;
  ServerStatus = 'offline';
  getServerStatus () {
    return this.ServerStatus;
  }
}
