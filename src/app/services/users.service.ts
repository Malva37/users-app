import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

const usersFromServer: User[] = [
  { id: 1, name: 'Ivan', surName: 'Synyshyn', gender: 'm', phone: 454548452, email: 'gegeg@com', city:'Kyiv',
 street: 'Bandera', picture: 'someurl'},
  { id: 2, name: 'Ira', surName: 'Pysanko', gender: 'f', phone: 454548452, email: 'gegeg@com', city:'Kyiv',
  street: 'Bandera', picture: 'someurl'},
  { id: 3, name: 'Svjat', surName: 'Zherebukh', gender: 'm', phone: 454548452, email: 'gegeg@com', city:'Kyiv',
  street: 'Bandera', picture: 'someurl' },
  { id: 4, name: 'Julia', surName: 'Synyshyn', gender: 'f', phone: 454548452, email: 'gegeg@com', city:'Kyiv',
  street: 'Bandera', picture: 'someurl' },
];

interface Data {
  results: User[];
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
    return this.http.get<Data>(`${API_URL}/?seed=foobar&results=25`);
    // const data = this.http.get<Data>(`${API_URL}/?seed=foobar&results=25`);

    // console.log(data);



  }
}
