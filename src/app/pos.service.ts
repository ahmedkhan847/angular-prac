import { Injectable } from '@angular/core';
import { User } from './login/login.component';
import { USERS } from './mocks/mocks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    this.messageService.add("Users Fetched")
    return of(USERS)
  }
}
