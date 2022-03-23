import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: Socket;
  constructor() {
    this.socket = io.connect(environment.apiUrl);
  }
}
