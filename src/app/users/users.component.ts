import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';
import { MessageService } from '../message.service';
import { PosService } from '../pos.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  selectedUser: User

  constructor(private posService: PosService, private messageService: MessageService) { }

  getUsers() {
    this.posService.getUsers().subscribe((users) => this.users = users)
  }

  onSelect(user: User) {
    this.selectedUser = user
    this.messageService.add(`Selected User ${user.password}`)
  }
  ngOnInit(): void {
    this.getUsers()
  }

}
