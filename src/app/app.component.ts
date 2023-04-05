import { User } from './types/user';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

const cities = ['Lviv', 'Dnipro', 'Kyiv'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  cities = cities;
  users: User[] = [];

  constructor (
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers()
     .subscribe((users) => {
      const { results } = users;
      const { info } = users;
      console.log(results);
      console.log(info);

      this.users = users.results;
      console.log(this.users);

    })
  }
}
