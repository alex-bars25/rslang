import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedUser, User } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loggedUser: LoggedUser;

  constructor(private http: HttpClient) { }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(
      'https://app-learnwords-rslang.herokuapp.com/users',
      {
        'name': user.name,
        'email': user.email,
        'password': user.password
      }
    )
  }

  public loginUser(user: User): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      'https://app-learnwords-rslang.herokuapp.com/signin',
      {
        'email': user.email,
        'password': user.password
      }
    )
  }

}
