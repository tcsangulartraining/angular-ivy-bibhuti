import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: SocketIOClient.Socket;
  constructor() {}
}
