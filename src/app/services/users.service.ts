import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersServerResponse } from '../types/dataFromServer';

const API_URL = 'https://randomuser.me/api';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UsersServerResponse>(
      `${API_URL}/?seed=foobar&results=100`
    );
  }

  getUsersWithParams(params: HttpParams) {
    return this.http.get<UsersServerResponse>(`${API_URL}/?results=100`, {
      params: params,
    });
  }
}
