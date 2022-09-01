import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedUser, User, IWord } from 'src/types';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  public getWords(group: number, page: number): Observable<IWord[]> {
    return this.http.get<IWord[]>(
      'https://app-learnwords-rslang.herokuapp.com/words',
      {
        params: {
          'group': group,
          'page': page
        }
      }
    )
  }


}
