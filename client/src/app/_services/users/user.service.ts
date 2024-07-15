import { inject, Injectable } from '@angular/core';
import { User } from '../../_models/users/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  users : User[] = [];

  public getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}Users`);
  }
}
