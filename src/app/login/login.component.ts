import { Component, OnInit } from '@angular/core';

export interface User {
  username: string
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    username: "admin",
    password: "123456"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
