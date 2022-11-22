import {Component} from '@angular/core';
import io from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mychat-angular';
  username: string = 'username';
  userId: number = 1234;
  messages = [];

  socket: any;

  constructor() {
  }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        // const element = document.createElement('li');
        // element.innerHTML = data;
        // document.getElementsByClassName('chat-box')[0].appendChild(element);
      }
    });
  }
}
