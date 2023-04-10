import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserFromServer } from 'src/app/types/data';
import { FieldFilter } from 'src/app/types/fieldFilter';
import { FilterParam } from 'src/app/types/filterParam';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent {
  cities: FilterParam[] = [];
  streets: FilterParam[] = [];
  genders: FilterParam[] = [];
  emails: FilterParam[] = [];
  phones: FilterParam[] = [];
  users: User[] = [];
  visibleUsers: User[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe((users) => {
      const { results } = users;
      this.users = this.normalizeData(results);
      this.cities = this.getCities(this.users);
      this.streets = this.getStreets(this.users);
      this.genders = this.getGensers(this.users);
      this.emails = this.getEmails(this.users);
      this.phones = this.getPhones(this.users);

      this.visibleUsers = this.filterUsers(this.users);
    });
  }

  chechedEvent() {
    this.visibleUsers = this.filterUsers(this.users);
  }

  loadWithParams() {
    const options = new HttpParams().set(
      'gender',
      JSON.parse(localStorage.getItem('gender') || '[]').join(',')
    );

    this.usersService.getUsersWithParams(options).subscribe((users) => {
      const { results } = users;
      this.users = this.normalizeData(results);
      this.visibleUsers = this.filterUsers(this.users);
    });
  }

  normalizeData = (data: UserFromServer[]): User[] => {
    return data.map((user) => {
      const preparedUser: User = {
        name: user.name.first + ' ' + user.name.last,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
        city: user.location.city,
        street: user.location.street.name,
        picture: user.picture.thumbnail,
      };
      return preparedUser;
    });
  };

  getGensers = (users: User[]): FilterParam[] => {
    return [...new Map(users.map((item) => [item.gender, item])).values()].map(
      (user) => {
        return {
          name: user.gender,
          isChecked: false,
        };
      }
    );
  };
  getCities = (users: User[]): FilterParam[] => {
    return [...new Map(users.map((item) => [item.city, item])).values()].map(
      (user) => {
        return {
          name: user.city,
          isChecked: false,
        };
      }
    );
  };
  getStreets = (users: User[]): FilterParam[] => {
    return [...new Map(users.map((item) => [item.street, item])).values()].map(
      (user) => {
        return {
          name: user.street,
          isChecked: false,
        };
      }
    );
  };
  getEmails = (users: User[]): FilterParam[] => {
    return [...new Map(users.map((item) => [item.email, item])).values()].map(
      (user) => {
        return {
          name: user.email,
          isChecked: false,
        };
      }
    );
  };
  getPhones = (users: User[]): FilterParam[] => {
    return [...new Map(users.map((item) => [item.phone, item])).values()].map(
      (user) => {
        return {
          name: user.phone,
          isChecked: false,
        };
      }
    );
  };

  filterUsers = (usersToFilter: User[]): User[] => {
    const filter: FieldFilter = {
      gender: JSON.parse(localStorage.getItem('gender') || '[]'),
      city: JSON.parse(localStorage.getItem('city') || '[]'),
      street: JSON.parse(localStorage.getItem('street') || '[]'),
      phone: JSON.parse(localStorage.getItem('phone') || '[]'),
      email: JSON.parse(localStorage.getItem('email') || '[]'),
    };

    return [...usersToFilter].filter((user) => {
      return (
        (filter.gender.length === 0 || filter.gender.includes(user.gender)
          ? user
          : null) &&
        (filter.city.length === 0 || filter.city.includes(user.city)
          ? user
          : null) &&
        (filter.street.length === 0 || filter.street.includes(user.street)
          ? user
          : null) &&
        (filter.email.length === 0 || filter.email.includes(user.email)
          ? user
          : null) &&
        (filter.phone.length === 0 || filter.phone.includes(user.phone)
          ? user
          : null)
      );
    });
  };
}
