import { User } from './types/user';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { Data } from './types/data';

const cities = ['Lviv', 'Dnipro', 'Kyiv'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})

export class AppComponent {
  cities: string[]= [];
  streets: string[]= [];
  users: User[] = [];

  normalizeData = (data: Data[]): User[] => {
    return data.map(user => {
      const preparedUser: User = {
        name: user.name.first + ' ' + user.name.last,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
        city: user.location.city,
        street: user.location.street.name,
        picture: user.picture.thumbnail,
      }
      return preparedUser;
    })
  };

  getCities = (users: User[]): string[] => {
    const preparedCities = users.map(user => user.city);

    return [...new Set(preparedCities)];
  }


  getStreets = (users: User[]): string[] => {
    const preparedStreets = users.map(user => user.street)

    return [...new Set(preparedStreets)];
  }


  constructor (
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers()
     .subscribe((users) => {
      const { results } = users;
      this.users = this.normalizeData(results);
      this.cities = this.getCities(this.users);
      this.streets = this.getStreets(this.users);
      // this.cities = this.getCities(results, 'city');
    })
  }
}
