import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../types/data';
import { User } from '../types/user';

interface DataFromServer {
  results: Data[];
  info:{
    page: number;
  results: number;
  seed: string;
  version:string;
  }
}

const API_URL ='https://randomuser.me/api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get<DataFromServer>(`${API_URL}/?seed=foobar&results=100`);
  }
}
