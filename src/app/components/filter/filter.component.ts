import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FieldFilter } from 'src/app/types/fieldFilter';
import { FilterParam } from 'src/app/types/filterParam';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [UsersService],
})
export class FilterComponent implements OnInit {
  @Input() cities!: FilterParam[];
  @Input() streets!: FilterParam[];
  @Input() genders!: FilterParam[];
  @Input() emails!: FilterParam[];
  @Input() phones!: FilterParam[];

  @Output() clickEvent = new EventEmitter();
  @Output() loadNew = new EventEmitter();

  filter: FieldFilter = {
    gender: JSON.parse(localStorage.getItem('gender') || '[]'),
    city: JSON.parse(localStorage.getItem('city') || '[]'),
    street: JSON.parse(localStorage.getItem('street') || '[]'),
    phone: JSON.parse(localStorage.getItem('phone') || '[]'),
    email: JSON.parse(localStorage.getItem('email') || '[]'),
  };

  isGenderOpen: boolean = false;
  isCitiesOpen: boolean = false;
  isStreetsOpen: boolean = false;
  isEmailsOpen: boolean = false;
  isPhonesOpen: boolean = false;
  gendersFromStorage: string[] = [];
  citiesFromStorage: string[] = [];
  streetsFromStorage: string[] = [];
  emailsFromStorage: string[] = [];
  phonesFromStorage: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.gendersFromStorage = JSON.parse(localStorage.getItem('gender') || '[]');
    this.citiesFromStorage = JSON.parse(localStorage.getItem('city') || '[]');
    this.streetsFromStorage = JSON.parse(localStorage.getItem('street') || '[]');
    this.emailsFromStorage = JSON.parse(localStorage.getItem('email') || '[]');
    this.phonesFromStorage = JSON.parse(localStorage.getItem('phone') || '[]');
  }

  updateGender() {
    this.gendersFromStorage = JSON.parse(localStorage.getItem('gender') || '[]');
    this.genders = this.genders.map((gender) => {
      return {
        name: gender.name,
        isChecked: this.gendersFromStorage.includes(gender.name),
      };
    });
  }
  updateCities() {
    this.citiesFromStorage = JSON.parse(localStorage.getItem('city') || '[]');
    this.cities = this.cities.map((city) => {
      return {
        name: city.name,
        isChecked: this.citiesFromStorage.includes(city.name),
      };
    });
  }
  updateStreets() {
    this.streetsFromStorage = JSON.parse(localStorage.getItem('street') || '[]');
    this.streets = this.streets.map((street) => {
      return {
        name: street.name,
        isChecked: this.streetsFromStorage.includes(street.name)
      }
    })
  }
  updateEmails() {
    this.emailsFromStorage = JSON.parse(localStorage.getItem('email') || '[]');
    this.emails = this.emails.map((email) => {
      return {
        name: email.name,
        isChecked: this.emailsFromStorage.includes(email.name)
      }
    })
  }
  // updatePhones(event: Event) {
    // const param: { [key: string]: FieldFilter } = (event.target as HTMLInputElement).name;
    // console.log(param);
  updatePhones() {
    this.phonesFromStorage = JSON.parse(localStorage.getItem('phone') || '[]');
    this.phones = this.phones.map((phone) => {
      return {
        name: phone.name,
        isChecked: this.phonesFromStorage.includes(phone.name)
      }
    })
  }

  handleClick(event: Event) {
    const param = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    const checked = (event.target as HTMLInputElement).checked;
    let paramsFromStorage: string[] = JSON.parse(
      localStorage.getItem(param) || '[]'
    );

    if (checked && !paramsFromStorage.includes(value)) {
      paramsFromStorage = [...paramsFromStorage, value];
      localStorage.setItem(param, JSON.stringify(paramsFromStorage));
    } else if (!checked) {
      paramsFromStorage = paramsFromStorage.filter((par) => par !== value);
      localStorage.setItem(param, JSON.stringify(paramsFromStorage));
    }

    this.clickEvent.emit();
  }

  resetAllFilters() {
    localStorage.clear();
    this.isGenderOpen = false;
    this.isCitiesOpen = false;
    this.isStreetsOpen = false;
    this.isEmailsOpen = false;
    this.isPhonesOpen = false;

    this.clickEvent.emit();
  }

  uploadNewData() {
    this.loadNew.emit();
  }
}
